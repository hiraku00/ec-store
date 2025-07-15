import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/");
    } else {
      setError("メールアドレスまたはパスワードが違います");
    }
  };

  return (
    <>
      <Head>
        <title>ログイン | Vintage Shop</title>
      </Head>
      <main className="max-w-md mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">ログイン</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="メールアドレス"
            className="w-full border rounded px-2 py-1"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="パスワード"
            className="w-full border rounded px-2 py-1"
          />
          <button
            type="submit"
            className="bg-gold text-white font-bold py-2 px-4 rounded"
          >
            ログイン
          </button>
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </main>
    </>
  );
}
