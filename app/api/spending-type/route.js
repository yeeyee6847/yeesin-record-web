import { createData, handlePrismaMethod, findAll } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    if (req.method === 'POST') {
        const json = await req.json();

        createData(json.value)

    } else {
        // Handle any other HTTP method
    }

    return NextResponse.json("");
}

export async function GET(req) {
    const data = await handlePrismaMethod(findAll("spendingType"));
    return NextResponse.json(data);
}

