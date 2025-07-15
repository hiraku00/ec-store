import React from "react";

export type Product = {
  id: string;
  name: string;
  brand: string;
  images: string[];
  size: string;
  price: number;
  description: string;
  condition: string;
  stock: number;
  tags: string[];
  category: string;
};

interface ProductCardProps {
  product: Product;
}

/**
 * モダンな商品カード（16:9画像・ブランドバッジ・グラデーション・ピル型タグ・余白多め・レスポンシブ）
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl border-0">
      <div className="relative w-full aspect-w-16 aspect-h-9 bg-gradient-to-br from-gold/30 to-beige/60 flex items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-brown to-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {product.brand}
        </span>
        {product.stock === 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            SOLD OUT
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col p-5 gap-2">
        <div className="flex items-center gap-2">
          <span
            className="text-lg font-extrabold text-dark truncate"
            title={product.name}
          >
            {product.name}
          </span>
          <span className="ml-auto text-base font-bold text-gold">
            ¥{product.price.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-gold to-brown text-white text-xs px-3 py-1 rounded-full font-semibold shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-500 line-clamp-2 mb-2">
          {product.description}
        </div>
        <div className="flex items-center gap-3 mt-auto">
          <span className="bg-beige text-brown text-xs px-2 py-0.5 rounded-full border border-brown">
            {product.size}
          </span>
          <span className="bg-brown text-beige text-xs px-2 py-0.5 rounded-full">
            {product.condition}
          </span>
          <span className="bg-gold text-white text-xs px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
