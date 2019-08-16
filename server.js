import path from 'path'
import fs from 'fs'
import express from 'express'

import React from 'react'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import App from './src/App.js'
// import routes from './src/routes'

const PORT = process.env.PORT || 3000
const app = express()
const router = express.Router()

app.use('/public', express.static(path.resolve('dist/public')))

app.get('*', (req, res) => {
  console.log(req.url)
  // const activeRoute = routes.find(route => matchPath(req.url, route)) || {}
  const context = {}
  const dom = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  const indexFile = path.resolve('dist/public/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${dom}</div>`)
    )
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
