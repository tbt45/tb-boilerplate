import express from "express";
import cors from "cors";
import router from "./routes";
import { testConnection } from "./config/db";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", router);

const port = 3000;
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);

  // DB接続確認
  try {
    await testConnection();
  } catch (err) {
    console.error("DB connection failed:", err);
  }
});
