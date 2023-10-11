import { createData, handlePrismaMethod, findAll } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const json = await req.json();

    if (json.type === "create") {
        
    }


    return NextResponse.json("");
}

export async function GET(req) {
    const data = await handlePrismaMethod(findAll("spendingType"));
    return NextResponse.json(data);
}

