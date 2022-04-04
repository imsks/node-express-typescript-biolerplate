import express, { Express, Request, Response } from "express";
import configEnv from "./config";

const app: Express = express();
const port = configEnv.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
