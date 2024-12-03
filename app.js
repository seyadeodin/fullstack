import http from "node:http"

http.createServer((req, res) => {
	res.write("On the way to being a full stack engineer! Or maybe not...");
	res.end();
}).listen(3000);

console.log("Sever started on port 3000");
