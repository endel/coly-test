import bodyParser from 'body-parser'
import { Server } from 'colyseus'
import express from 'express'
import http from 'http'

import { TestRoom } from './TestRoom'

const port = Number(process.env.PORT) || 3553
const endpoint = 'localhost'

const app = express()
app.use(bodyParser.json())

const server = http.createServer(app)

const gameServer = new Server({
  server,
})

gameServer.define('testroom', TestRoom)

app.use(express.static(__dirname))

gameServer.listen(port)

console.log(`Listening on ws://${endpoint}:${port}`)
