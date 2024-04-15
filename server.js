import dotenv from "dotenv"
import next from "next"
import nextBuild from "next/dist/build"
import path from "path"

// This will depend on whether your server.ts file and general
// app setup is located below a src folder or not.
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
})

import express from "express"

const app = express()
const PORT = process.env.PORT || 3005

const start = async () => {
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      console.log(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, ".."))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    console.log("Next.js started")

    app.listen(PORT, async () => {
      console.log(`Next.js App URL: ${process.env.NEXT_SERVER_URL}`)
    })
  })
}

start()
