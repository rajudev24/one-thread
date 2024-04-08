/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { Server } from 'http'

process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

let server: Server

async function main() {
  try {
    await mongoose.connect(config.db_url as string)
    console.log('Database is connected successfully')
    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect database', error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()

process.on('SIGTERM', () => {
  if (server) {
    server.close()
  }
})
