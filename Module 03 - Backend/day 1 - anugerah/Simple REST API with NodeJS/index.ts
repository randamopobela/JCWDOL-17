import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000;

const server = http.createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
        if (req.url === "/api" && req.method === "GET") {
            res.writeHead(200, { "Content-Type": "application/json" }),
                res.write("Hi there, this is a response from the server"),
                res.end();
        } else {
            res.writeHead(404, { "Content-Type": "application/json" }),
                res.write("Page not found"),
                res.end();
        }
    }
);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
