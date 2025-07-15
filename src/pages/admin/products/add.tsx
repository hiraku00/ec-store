import Head from "next/head";
import { useRouter } from "next/router";
import AdminProductForm from "../../../components/AdminProductForm";
import { Product } from "../../../components/ProductCard";

export default function AdminProductAddPage() {
  const router = useRouter();

  const handleSave = async (product: Product) => {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    router.push("/admin");
  };

  return (
    <>
      <Head>
        <title>商品追加 | 管理ダッシュボード</title>
      </Head>
      <main className="max-w-xl mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">商品追加</h1>
        <AdminProductForm onSave={handleSave} />
      </main>
    </>
  );
}
