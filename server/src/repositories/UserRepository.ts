import { User } from "../types/user";

export class UserRepository {
  // 仮のユーザーデータ 開発中のみ
  private static users: User[] = [
    {
      id: 1,
      email: "test@example.com",
      password: "$2b$10$Isl89fOtrJjXH0RB7ZnGNurPT3qTC3/eBCfc2Fk6p9.ccZLarqjfW",
      created_at: new Date(),
    },
  ];

  static async findOne(options: {
    where: { email: string };
  }): Promise<User | null> {
    const { email } = options.where;
    return this.users.find((u) => u.email === email) ?? null;
  }
}
