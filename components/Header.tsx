// src/components/Header.tsx 업데이트 버전
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isExploreOpen, setIsExploreOpen] = useState(false); // Category -> Explore로 명칭 통일

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <Link 
          href="/"
          className="transition-opacity duraion-300 hover:opacity-50">
            <Image src="/logo.png" alt="Logo" width={75} height={75} className="object-contain" priority />
          </Link>
        </div>

        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-900">
            <li>
              <button onClick={() => setIsExploreOpen(!isExploreOpen)} className="hover:text-gray-500 transition-colors">
                Explore
              </button>
            </li>
            <li><Link href="/brands" className="hover:text-gray-500 transition-colors">Brands</Link></li>
            <li><Link href="/journal" className="hover:text-gray-500 transition-colors">Journal</Link></li>
            <li><Link href="/about" className="hover:text-gray-500 transition-colors">About</Link></li>
          </ul>
        </nav>

        <div className="flex-1 flex justify-end gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-800">
          <button className="text-gray-400 hover:text-black transition-colors">Admin</button>
          <button className="hover:text-gray-500">Search</button>
        </div>
      </header>

      {/* Explore Overlay: 브랜드 대신 카테고리(아이템 종류) 중심으로 구성 */}
      {isExploreOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 pt-32 px-10 md:px-20 text-white animate-in fade-in duration-300">
          <button onClick={() => setIsExploreOpen(false)} className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
            <span className="text-[10px] tracking-widest uppercase mr-3">Close</span>
            <span className="text-2xl font-light">✕</span>
          </button>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {["Outerwear", "Tops", "Bottoms", "Accessories"].map((cat) => (
              <div key={cat} className="flex flex-col items-center">
                <h3 className="text-[11px] font-black mb-8 border-b border-white/10 pb-3 uppercase tracking-[0.2em]">{cat}</h3>
                <ul className="space-y-4 text-[10px] uppercase tracking-[0.15em] text-gray-400">
                  <li className="hover:text-white transition-colors"><Link href={`/archive?cat=${cat}`}>View All</Link></li>
                  {/* 나중에 여기에 세부 카테고리(Flight Jacket 등)를 추가하면 됩니다 */}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}