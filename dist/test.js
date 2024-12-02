"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    res.end("hello world");
});
server.listen(3000, () => console.log("listening on port 3000"));
