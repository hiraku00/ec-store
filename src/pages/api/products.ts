import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../components/ProductCard";

// メモリ上の商品データ（本番はDB推奨）
let products: Product[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    const product = req.body as Product;
    products.push(product);
    res.status(201).json(product);
  } else if (req.method === "PUT") {
    const product = req.body as Product;
    const idx = products.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      products[idx] = product;
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    products = products.filter((p) => p.id !== id);
    res.status(204).end();
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
