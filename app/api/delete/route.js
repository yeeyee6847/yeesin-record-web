import { createData, deleteSingle, handlePrismaMethod } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    const json = await req.json();
    console.log(json);

    handlePrismaMethod(deleteSingle(json));

    return NextResponse.json("");
}


