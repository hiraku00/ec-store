import React from "react";

/**
 * Instagramフィード表示用コンポーネント
 * - 現状はダミー画像・テキスト
 * - 将来的にAPI連携可能な構成
 */
const InstagramFeed: React.FC = () => {
  // ダミー画像
  const images = [
    "/images/insta1.jpg",
    "/images/insta2.jpg",
    "/images/insta3.jpg",
  ];
  return (
    <section className="w-full max-w-4xl p-4">
      <h2 className="font-heading text-xl mb-2">Instagram 最新投稿</h2>
      <div className="flex gap-4 justify-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-32 h-32 bg-beige border border-brown rounded overflow-hidden flex items-center justify-center"
          >
            <img
              src={img}
              alt={`insta${i}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="text-brown text-center mt-2 text-sm">
        ※Instagram API連携は近日対応予定
      </div>
    </section>
  );
};

export default InstagramFeed;
