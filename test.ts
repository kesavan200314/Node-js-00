import { createServer } from "http";

const server = createServer((req, res) => {
    res.end("hello world");
});

server.listen(3000, () => console.log("listening on port 3000"));




