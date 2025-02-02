'use client';
import TimerComponent from "./components/TimerComponent";
import Image from "next/image";
import logo from './assets/pomesh-icon.svg'

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="italic text-2xl">
      <Image src={logo} width={70} height={70} quality={100} alt="Break icon" />
      </header>
      <main className="">
        <TimerComponent />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-[family-name:var(--font-geist-mono)]">
        © Copyright 2024 Shailesh
      </footer>
    </div>
  );
}