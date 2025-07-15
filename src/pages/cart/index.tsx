import Head from "next/head";
import Cart from "../../components/Cart";

export default function CartPage() {
  return (
    <>
      <Head>
        <title>カート | Vintage Shop</title>
      </Head>
      <main className="max-w-3xl mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">カート</h1>
        <Cart />
      </main>
    </>
  );
}
