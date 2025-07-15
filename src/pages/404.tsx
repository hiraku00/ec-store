import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beige">
      <h1 className="font-heading text-4xl text-brown mb-4">
        404 - ページが見つかりません
      </h1>
      <p className="text-dark mb-6">
        お探しのページは存在しないか、移動しました。
      </p>
      <Link href="/" className="bg-gold text-white font-bold py-2 px-4 rounded">
        トップへ戻る
      </Link>
    </div>
  );
}
