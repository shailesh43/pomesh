'use client';
import TimerComponent from "./components/TimerComponent";
import Image from "next/image";
import logo from './assets/pomesh-logo.svg'
import Link from "next/link";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex text-2xl mixed">
        <Image src={logo} width={100} height={100} quality={100} alt="Break icon" className="" />
        <ul className="flex ml-96 gap-3 justify-center items-center text-[20px]">
          <li className="hover:underline ml-3 underline-offset-4 hover:cursor-pointer text-gray-300 hover:text-blue-500"><Link href="/about">about</Link></li>
          <li className="hover:underline ml-3 underline-offset-4 hover:cursor-pointer text-gray-300 hover:text-blue-500"><Link href="/tasks">tasks</Link></li>
          <li className="hover:cursor-pointer ring-2 rounded-full ml-12 p-1 px-2 text-blue-500 hover:text-white hover:bg-blue-500 transition hover:underline hover:underline-offset-4"> <Link href="https://github.com/shailesh43/pomesh" target="_blank">contribute <span>&#8599;</span></Link>  </li>
          </ul>
      </header>
      <main className="">
        <TimerComponent />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-[family-name:var(--font-geist-mono)]">
        © Copyright 2025 Shailesh
      </footer>
    </div>
  );
}