import Head from "next/head";
import ProductList from "../../components/ProductList";

export default function ProductListPage() {
  return (
    <>
      <Head>
        <title>商品一覧 | Vintage Shop</title>
      </Head>
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">商品一覧</h1>
        <ProductList />
      </main>
    </>
  );
}
