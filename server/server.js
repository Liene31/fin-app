import express from "express";

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/healthz", (req, res) => {
  res.status(200).json({ message: "health check" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
