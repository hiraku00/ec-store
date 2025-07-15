import Head from "next/head";

// ダミー受注データ
const dummyOrders = [
  {
    id: "order1",
    date: "2024-07-15",
    customer: "山田太郎",
    total: 15800,
    items: "デニムジャケットx1, ワンピースx1",
    status: "決済済み",
  },
  {
    id: "order2",
    date: "2024-07-14",
    customer: "佐藤花子",
    total: 8500,
    items: "アディダスジャケットx1",
    status: "決済済み",
  },
];

export default function AdminOrdersPage() {
  return (
    <>
      <Head>
        <title>受注レポート | 管理ダッシュボード</title>
      </Head>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="font-heading text-2xl mb-4">受注レポート</h1>
        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-beige">
              <th className="border px-2 py-1">注文ID</th>
              <th className="border px-2 py-1">注文日</th>
              <th className="border px-2 py-1">顧客名</th>
              <th className="border px-2 py-1">合計金額</th>
              <th className="border px-2 py-1">商品</th>
              <th className="border px-2 py-1">ステータス</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((o) => (
              <tr key={o.id}>
                <td className="border px-2 py-1">{o.id}</td>
                <td className="border px-2 py-1">{o.date}</td>
                <td className="border px-2 py-1">{o.customer}</td>
                <td className="border px-2 py-1">
                  ¥{o.total.toLocaleString()}
                </td>
                <td className="border px-2 py-1">{o.items}</td>
                <td className="border px-2 py-1">{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
