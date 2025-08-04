import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST || "db", // docker-compose service名
  port: parseInt(process.env.DB_PORT || "3306"),
  user: process.env.DB_USER || "app_user",
  password: process.env.DB_PASSWORD || "app_pass",
  database: process.env.DB_NAME || "app_development",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// DB接続テスト用
export async function testConnection() {
  const [rows] = await pool.query("SELECT NOW() AS now");
  console.log("DB connected:", rows);
}
