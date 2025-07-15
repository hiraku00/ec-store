import React, { useState } from "react";
import { Product } from "./ProductCard";

interface ProductDetailProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

/**
 * 商品詳細コンポーネント
 * - 画像スライダー・詳細情報・カート追加ボタン
 */
const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onAddToCart,
}) => {
  const [imgIdx, setImgIdx] = useState(0);

  const handleAddToCart = () => {
    // カート取得
    const stored = localStorage.getItem("cart");
    let cart = stored ? JSON.parse(stored) : [];
    // 既存商品なら数量加算
    const idx = cart.findIndex((item: any) => item.id === product.id);
    if (idx >= 0) {
      cart[idx].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("カートに追加しました");
  };

  return (
    <div className="bg-white rounded shadow p-6 border border-gold">
      <div className="flex flex-col md:flex-row gap-6">
        {/* 画像スライダー */}
        <div className="flex-1">
          <img
            src={product.images[imgIdx]}
            alt={product.name}
            className="w-full h-72 object-cover rounded border border-beige mb-2"
          />
          <div className="flex gap-2 mt-2">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={product.name + "-" + i}
                className={`w-16 h-16 object-cover rounded border cursor-pointer ${
                  imgIdx === i ? "border-gold" : "border-beige"
                }`}
                onClick={() => setImgIdx(i)}
              />
            ))}
          </div>
        </div>
        {/* 詳細情報 */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="font-heading text-2xl mb-2">{product.name}</div>
          <div className="text-brown text-lg mb-1">{product.brand}</div>
          <div className="text-dark font-bold text-xl mb-1">
            ¥{product.price.toLocaleString()}
          </div>
          <div className="text-sm">サイズ: {product.size}</div>
          <div className="text-sm">
            状態: <span className="text-gold">{product.condition}</span>
          </div>
          <div className="text-sm">
            在庫: {product.stock > 0 ? product.stock : "売切"}
          </div>
          <div className="text-sm">カテゴリ: {product.category}</div>
          <div className="text-sm">タグ: {product.tags.join(", ")}</div>
          <div className="mt-2 text-dark text-base">{product.description}</div>
          <button
            className="mt-4 bg-gold text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={product.stock === 0}
            onClick={handleAddToCart}
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
