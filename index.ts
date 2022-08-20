import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import home from "./home";
import login from "./login";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send(home());
});

app.post ('/login', (req: Request, res:Response ) => {
    const result: object = req.body;
    console.log("Test one : " + result);
    res.send(login());
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});