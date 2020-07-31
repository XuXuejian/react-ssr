import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { btnAction } from "./store";

function Home(props) {
  console.log("----", Date.now());
  const [data, setData] = React.useState([]);
  // const actions = bindActionCreators(
  //   {
  //     btnAction,
  //   },
  //   props.dispatch
  // );
  React.useEffect(() => {
    console.log(window);
    fetch(
      "https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=10&mdrender=false"
    )
      .then((res) => res.json())
      .then((res) => {
        // setData(res.data);
      });
  }, []);
  const publish = () => {
    fetch("http://localhost:3000/bundle", {
      method: "POST",
      body: JSON.stringify({
        page: true,
        value: "生成页面",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <h2 className="app">home page.</h2>
      <button onClick={publish}>发布</button>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <h3>{d.title}</h3>
            <span>{d.content}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => props.btnAction("yes it is.")}>发起action</button>
    </div>
  );
}

export default connect(null, { btnAction })(Home);
