import { Router } from "express";
// const router = express.Router();
import { AuthsController } from "./controllers/AuthsController";

const router: Router = Router();

router.post("/login", AuthsController.login);

// 接続テスト用
router.get("/", (_, res) => {
  res.send("connected");
});

export default router;
