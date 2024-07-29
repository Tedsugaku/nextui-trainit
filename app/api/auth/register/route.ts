import { NextResponse } from "next/server";

async function POST(request:any){
   const data = await request.json();
   return NextResponse.json('registrando')
}