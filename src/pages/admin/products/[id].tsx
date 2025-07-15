import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import AdminProductForm from "../../../components/AdminProductForm";
import { Product } from "../../../components/ProductCard";

export default function AdminProductEditPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === id);
        setProduct(found || null);
      });
  }, [id]);

  const handleSave = async (product: Product) => {
    await fetch("/api/products", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    router.push("/admin");
  };

  return (
    <>
      <Head>
        <title>商品編集 | 管理ダッシュボード</title>
      </Head>
      <main className="max-w-xl mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">商品編集</h1>
        {product ? (
          <AdminProductForm initial={product} onSave={handleSave} />
        ) : (
          <div className="bg-beige border border-brown rounded p-4 text-center text-brown">
            商品が見つかりません
          </div>
        )}
      </main>
    </>
  );
}
