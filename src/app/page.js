"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
export default function Home() {
  return (
    <>
      {data.map((producto)=>{
        return (
          <>
            <di className="flex justify-center p-10">
              <p className='text-red-700 '>{producto.nombre}</p>
            </di>
          </>
        );
      })}
    </>
  )
}
