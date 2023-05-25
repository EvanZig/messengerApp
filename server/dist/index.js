import express from 'express';
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('hello world ssss');
});
app.listen(port, () => {
    console.log(`app is listening at port ${[port]}`);
});
//# sourceMappingURL=index.js.map