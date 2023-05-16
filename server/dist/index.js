import express from 'express';
const port = 8000;
const app = express();
app.get("/", (req, res) => {
    res.send("hello world");
});
app.listen(port, () => {
    console.log(`app is listening at port ${[port]}`);
});
//# sourceMappingURL=index.js.map