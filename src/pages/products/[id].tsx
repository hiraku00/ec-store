import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import ProductDetail from "../../components/ProductDetail";
import { Product } from "../../components/ProductCard";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === id);
        setProduct(found || null);
      });
  }, [id]);

  return (
    <>
      <Head>
        <title>商品詳細 | Vintage Shop</title>
      </Head>
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">商品詳細</h1>
        {product ? (
          <ProductDetail product={product} />
        ) : (
          <div className="bg-beige border border-brown rounded p-4 text-center text-brown">
            商品が見つかりません
          </div>
        )}
      </main>
    </>
  );
}
