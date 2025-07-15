import React from "react";

export interface FilterState {
  brand: string;
  category: string;
  size: string;
  condition: string;
  tag: string;
}

interface FilterSidebarProps {
  filters: FilterState;
  brands: string[];
  categories: string[];
  sizes: string[];
  conditions: string[];
  tags: string[];
  onChange: (filters: FilterState) => void;
}

/**
 * 商品一覧用フィルターサイドバー
 * - ブランド・カテゴリ・サイズ・状態・タグで絞り込み
 */
const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  brands,
  categories,
  sizes,
  conditions,
  tags,
  onChange,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    onChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <aside className="bg-beige border border-brown rounded p-4 mb-4 w-full md:w-64">
      <div className="mb-2">
        <label className="block text-sm mb-1">ブランド</label>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">すべて</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm mb-1">カテゴリ</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">すべて</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm mb-1">サイズ</label>
        <select
          name="size"
          value={filters.size}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">すべて</option>
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm mb-1">状態</label>
        <select
          name="condition"
          value={filters.condition}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">すべて</option>
          {conditions.map((cond) => (
            <option key={cond} value={cond}>
              {cond}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm mb-1">タグ</label>
        <input
          name="tag"
          value={filters.tag}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          placeholder="タグ名で検索"
        />
      </div>
    </aside>
  );
};

export default FilterSidebar;
