"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
export default function Home() {
  const [data, setdata] = useState([]);
  useEffect(() => { 
    fetch('/api/productos').then(res => res.json()).then(data => setdata(data));
  }, []);
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
