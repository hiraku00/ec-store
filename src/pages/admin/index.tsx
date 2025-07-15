import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../../components/ProductCard";

export default function AdminDashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("本当に削除しますか？")) return;
    await fetch(`/api/products?id=${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <Head>
        <title>管理ダッシュボード | Vintage Shop</title>
      </Head>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">管理ダッシュボード</h1>
        <Link
          href="/admin/products/add"
          className="bg-gold text-white font-bold py-2 px-4 rounded mb-4 inline-block"
        >
          商品追加
        </Link>
        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-beige">
              <th className="border px-2 py-1">商品名</th>
              <th className="border px-2 py-1">ブランド</th>
              <th className="border px-2 py-1">価格</th>
              <th className="border px-2 py-1">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="border px-2 py-1">{p.name}</td>
                <td className="border px-2 py-1">{p.brand}</td>
                <td className="border px-2 py-1">
                  ¥{p.price.toLocaleString()}
                </td>
                <td className="border px-2 py-1">
                  <Link
                    href={`/admin/products/${p.id}`}
                    className="text-gold underline mr-2"
                  >
                    編集
                  </Link>
                  <button
                    className="text-brown underline"
                    onClick={() => handleDelete(p.id)}
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
