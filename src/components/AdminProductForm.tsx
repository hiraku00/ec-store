import React, { useState } from "react";
import { Product } from "./ProductCard";

interface AdminProductFormProps {
  initial?: Partial<Product>;
  onSave: (product: Product) => void;
}

/**
 * 管理画面用商品フォーム
 * - 商品追加・編集で利用
 */
const AdminProductForm: React.FC<AdminProductFormProps> = ({
  initial = {},
  onSave,
}) => {
  const [form, setForm] = useState<Partial<Product>>({
    name: initial.name || "",
    brand: initial.brand || "",
    images: initial.images || [""],
    size: initial.size || "",
    price: initial.price || 0,
    description: initial.description || "",
    condition: initial.condition || "",
    stock: initial.stock || 1,
    tags: initial.tags || [],
    category: initial.category || "",
    id: initial.id || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      tags: e.target.value.split(",").map((t) => t.trim()),
    }));
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      images: e.target.value.split(",").map((t) => t.trim()),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.brand) return alert("必須項目を入力してください");
    onSave(form as Product);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="商品名"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="brand"
        value={form.brand}
        onChange={handleChange}
        placeholder="ブランド"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="images"
        value={form.images?.join(",")}
        onChange={handleImages}
        placeholder="画像URL(カンマ区切り)"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="size"
        value={form.size}
        onChange={handleChange}
        placeholder="サイズ"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="価格"
        className="w-full border rounded px-2 py-1"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="説明"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="condition"
        value={form.condition}
        onChange={handleChange}
        placeholder="状態"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
        placeholder="在庫"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="tags"
        value={form.tags?.join(",")}
        onChange={handleTags}
        placeholder="タグ(カンマ区切り)"
        className="w-full border rounded px-2 py-1"
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="カテゴリ"
        className="w-full border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-gold text-white font-bold py-2 px-4 rounded"
      >
        保存
      </button>
    </form>
  );
};

export default AdminProductForm;
