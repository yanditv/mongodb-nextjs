import db from "@mongodb-nextjs/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    const connection = await db();
    const data = await connection.collection("productos").find().toArray();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function POST(NextRequest) {
  try{
    const datos = await NextRequest.json();
    const connection = await db();
   const returndata = await connection.collection("productos").insertOne(datos);
    return NextResponse.json(returndata);

  }catch(error){
    console.error(error);
    return NextResponse.error(error );
  }
}
export async function PUT(NextRequest) {
  try{
    const datos = await NextRequest.json();
    const connection = await db();
    const returndata = await connection.collection("productos").updateOne({nombre:datos.nombre},{$set:{precio:datos.precio}});
    return NextResponse.json(returndata);

  }catch(error){
    console.error(error);
    return NextResponse.error(error );
  }
}

