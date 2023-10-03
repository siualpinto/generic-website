"use client";

import Link from "next/link";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link href="/orders">Encomendas</Link>
      <div className="">
        <Button>Check</Button>
      </div>
    </main>
  );
}
