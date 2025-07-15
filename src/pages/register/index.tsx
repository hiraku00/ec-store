import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password)
      return alert("全て入力してください");
    // ダミーでローカルストレージ保存
    localStorage.setItem("user", JSON.stringify(form));
    alert("登録しました");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>会員登録 | Vintage Shop</title>
      </Head>
      <main className="max-w-md mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">会員登録</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="お名前"
            className="w-full border rounded px-2 py-1"
          />
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
            登録
          </button>
        </form>
      </main>
    </>
  );
}
