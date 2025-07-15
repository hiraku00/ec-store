import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { href: "/products", label: "商品一覧" },
  { href: "/cart", label: "カート" },
  { href: "/admin", label: "管理" },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    setUser(stored ? JSON.parse(stored) : null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-gold via-beige to-brown shadow-lg px-4 py-3 flex items-center justify-between relative">
        <Link
          href="/"
          className="font-heading text-3xl font-extrabold text-brown tracking-wide drop-shadow-lg"
        >
          Vintage Shop
        </Link>
        {/* PCナビ */}
        <nav className="hidden md:flex gap-3 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full bg-white/80 hover:bg-gold text-brown font-bold transition-all shadow-sm"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-brown text-white font-bold hover:bg-gold transition-all ml-2"
            >
              ログアウト
            </button>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-full bg-brown text-white font-bold hover:bg-gold transition-all ml-2"
            >
              ログイン
            </Link>
          )}
        </nav>
        {/* モバイル用ハンバーガー */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-7 h-1 bg-brown rounded"></span>
          <span className="block w-7 h-1 bg-brown rounded"></span>
          <span className="block w-7 h-1 bg-brown rounded"></span>
        </button>
        {/* モバイルメニュー */}
        {menuOpen && (
          <nav className="absolute top-full right-4 bg-white rounded-2xl shadow-lg flex flex-col gap-2 p-4 z-50 min-w-[180px] md:hidden animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full bg-beige hover:bg-gold text-brown font-bold transition-all shadow-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-brown text-white font-bold hover:bg-gold transition-all"
              >
                ログアウト
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-full bg-brown text-white font-bold hover:bg-gold transition-all"
              >
                ログイン
              </Link>
            )}
          </nav>
        )}
      </header>
      <main className="min-h-[80vh] bg-beige">{children}</main>
    </div>
  );
};

export default Layout;
