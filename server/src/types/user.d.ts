// TODO: フロントとサーバーでDBの型は共通にしておきたい 例: shared/types/user.ts
export interface User { // TODO: lint入れて型を強制する
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at?: Date;
}
