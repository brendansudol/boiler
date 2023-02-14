import express, { Request, Response, NextFunction } from "express"
import path from "path"

const PORT = 3000

const app = express()

app.use(express.static(path.join(__dirname, "../public")))

app.get("/", (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("index.html")
  } catch (error) {
    next(error)
  }
})

app.get("/ping", (_req, res) => {
  return res.json({ ping: "pong!" })
})

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
