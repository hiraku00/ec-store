import React, { useEffect, useState } from "react";
import { Product } from "./ProductCard";

export type CartItem = Product & { quantity: number };

/**
 * カート一覧・数量変更・削除・合計金額・決済ボタン
 * - ローカルストレージでカート管理
 */
const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  // カート初期化
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // カート変更時に保存
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQty = (id: string, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("決済ページの生成に失敗しました");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded shadow p-6 border border-gold">
      <h2 className="font-heading text-xl mb-4">カート内容</h2>
      {cart.length === 0 ? (
        <div className="text-brown">カートは空です</div>
      ) : (
        <>
          <ul className="divide-y divide-beige mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 py-2">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded border"
                />
                <div className="flex-1">
                  <div className="font-heading">{item.name}</div>
                  <div className="text-brown text-sm">{item.brand}</div>
                  <div className="text-dark">
                    ¥{item.price.toLocaleString()}
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1 mr-2"
                />
                <button
                  className="text-xs text-gold underline"
                  onClick={() => removeItem(item.id)}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold mb-4">
            合計: ¥{total.toLocaleString()}
          </div>
          <button
            className="bg-gold text-white font-bold py-2 px-6 rounded"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "リダイレクト中..." : "決済へ進む"}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
