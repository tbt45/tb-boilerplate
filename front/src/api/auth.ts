export async function login(email: string, password: string) {
  //TODO: 環境変数でURL管理
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Login failed");

  const data = await res.json();
  localStorage.setItem("auth", JSON.stringify(data)); // token + user
  return data.user;
}

export function getStoredUser() {
  const raw = localStorage.getItem("auth");
  return raw ? JSON.parse(raw).user : null;
}

export function getToken() {
  const raw = localStorage.getItem("auth");
  return raw ? JSON.parse(raw).token : null;
}
