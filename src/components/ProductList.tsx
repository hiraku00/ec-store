import React, { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import FilterSidebar, { FilterState } from "./FilterSidebar";

/**
 * 商品一覧コンポーネント
 * - サンプルデータ（products.json）をfetchして表示
 * - フィルター・タグ検索機能付き
 */
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    brand: "",
    category: "",
    size: "",
    condition: "",
    tag: "",
  });

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // 選択肢自動抽出
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const sizes = Array.from(new Set(products.map((p) => p.size)));
  const conditions = Array.from(new Set(products.map((p) => p.condition)));
  const tags = Array.from(new Set(products.flatMap((p) => p.tags)));

  // フィルター適用
  const filtered = products.filter(
    (p) =>
      (!filters.brand || p.brand === filters.brand) &&
      (!filters.category || p.category === filters.category) &&
      (!filters.size || p.size === filters.size) &&
      (!filters.condition || p.condition === filters.condition) &&
      (!filters.tag || p.tags.some((t) => t.includes(filters.tag)))
  );

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <FilterSidebar
        filters={filters}
        brands={brands}
        categories={categories}
        sizes={sizes}
        conditions={conditions}
        tags={tags}
        onChange={setFilters}
      />
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-brown">
            該当する商品がありません
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
