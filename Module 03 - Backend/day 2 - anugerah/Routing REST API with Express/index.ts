import e from "express";
import express, { Application, NextFunction, Request, Response } from "express";

const PORT = 8000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.post("/", (req: Request, res: Response) => {
    res.send("Ini Post");
});

app.patch("/", (req: Request, res: Response) => {
    res.send("Ini Patch");
});

app.put("/", (req: Request, res: Response) => {
    res.send("HeIni Put");
});

app.delete("/", (req: Request, res: Response) => {
    res.send("Ini Delete");
});

// Menghandle semua route yang diakhiri 'fly'
app.get(/.*fly$/, (req: Request, res: Response) => {
    res.send("Semua yang diakhiri 'fly'");
});

// Menghandle semua route yang ada huruf 'a'
app.get(/a/, (req: Request, res: Response) => {
    res.send("a/");
});

// Menghandle semua route yang ada huruf 'a'
// app.get(/a/, (req: Request, res: Response) => {
//     res.send(req.params);
// });

app.get("/example/a", (req: Request, res: Response) => {
    res.send("Hello from A");
});

const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { email, name } = req.body;
    if (!email || !name)
        res.status(400).send({
            message: "email dan name wajib diisi",
        });
    else next();
};

app.post("/users", validateUser, (req: Request, res: Response) => {
    res.send("new user has been added");
});

app.patch("/users/:userId", validateUser, (req: Request, res: Response) => {
    res.send("new user has been updated");
});

app.get("/redirect", (req: Request, res: Response) => {
    res.redirect("https://google.com"); //redirect ke google.com
});

app.get("/download", (req: Request, res: Response) => {
    console.log(__dirname);
    res.download(__dirname + "/notes.txt");
});

app.post("/form-encoded", (req: Request, res: Response) => {
    res.send(req.body);
});

app.listen(PORT, () => console.log(`API is running on PORT ${PORT}`));
