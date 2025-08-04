// src/controllers/AuthsController.ts
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository";

export class AuthsController {
  static async login(
    req: Request<any, any, { email: string; password: string }>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await UserRepository.findOne({ where: { email } });
      if (!user) {
        res.status(401).send("ユーザーが存在しません");
        return;
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        res.status(401).send("パスワードが間違っています");
        return;
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET_KEY ?? "default-secret",
        { expiresIn: "1h" }
      );

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("サーバーエラーが発生しました");
    }
  }
}
