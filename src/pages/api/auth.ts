import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { email, password } = req.body;
  // ダミー認証: email, passwordが両方あればOK
  if (email && password) {
    return res.status(200).json({ user: { email, name: "ダミーユーザー" } });
  }
  return res.status(401).json({ error: "Invalid credentials" });
}
