import path from "path";
import fs from "fs";
import express from "express";
import webpack from "webpack";
import bodyParser from "body-parser";

import React from "react";
import { StaticRouter, matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { reducer } from "./src/store.js";
import App from "./src/App.js";
// import routes from './src/routes'
import config from "./config/webpack.client.config";
import { MyTest } from "./src/MyTest";
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/public", express.static(path.resolve("dist/public")));
app.post("/bundle", (req, res) => {
  const finalConfig = {
    ...config,
    entry: "./src/page.js",
    output: {
      filename: "client-bundle.js",
      path: path.resolve(process.cwd(), "./bundle/public"),
      publicPath: "./",
      chunkFilename: "[name].js",
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[hash:8].css",
      }),
      new htmlWebpackPlugin({
        filename: "index.html",
        favicon: "./favicon.ico",
        template: "./index.html",
      }),
    ],
    target: "web",
    mode: "production",
    stats: "errors-only",
  };
  console.log(finalConfig);
  webpack(finalConfig).run((err, stats) => {
    const file = path.resolve(process.cwd(), "./bundle/public/index.html");
    const dom = renderToString(<MyTest />);
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        throw new Error(err);
      }
      const newData = data.replace(
        '<div id="app"></div>',
        `<div id="app">${dom}</div>`
      );
      console.log(file);
      console.log(data);
      console.log(newData);
      fs.writeFile(file, newData, (err) => {
        if (err) {
          throw new Error(err);
        }
        console.log("end");
      });
    });
    // console.log(stats.toString({ colors: true }));
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.send({ value: "this should be html" });
});
app.get("*", (req, res) => {
  console.log(req.url);
  // const activeRoute = routes.find(route => matchPath(req.url, route)) || {}
  const context = {};
  const preloadedState = {
    test: {
      btn: {
        clicked: false,
        data: "fuck",
      },
      fuck: {
        yes: true,
      },
    },
  };
  const store = createStore(reducer, preloadedState);
  const dom = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
  const indexFile = path.resolve("dist/public/index.html");
  console.log(dom);
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    res.send(
      data.replace(
        '<div id="app"></div>',
        `<div id="app">${dom}</div><script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/recipes/server-rendering/#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
          /</g,
          "\\u003c"
        )}
      </script>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
