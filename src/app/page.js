"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center">INICIO</h1>
        <a href="/productos" className="inline-flex rounded-md bg-blue-400 py-2 px-3">Productos</a>
      </div>
    </>
  )
}
