import Head from "next/head";
import InstagramFeed from "../components/InstagramFeed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vintage Shop | ヴィンテージ古着屋EC</title>
        <meta
          name="description"
          content="ヴィンテージ古着の通販サイト。厳選された一点物を多数掲載。"
        />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center">
        {/* 特集バナー */}
        <section className="w-full max-w-4xl p-4 mb-8">
          <div className="bg-gold rounded-lg shadow p-6 text-center font-heading text-2xl">
            今月の特集：70sデニム&レトロワンピース
          </div>
        </section>
        {/* Instagramフィード */}
        <InstagramFeed />
      </main>
    </>
  );
}
