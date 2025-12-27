import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest,{params}:{params:Promise<{id:string}>}){
    //const body = await request.formData(); //接受formData数据
    //const body = await request.text(); //接受text数据
    //const body = await request.arrayBuffer(); //接受arrayBuffer数据
    //const body = await request.blob(); //接受blob数据
    const { id } = await params;
    return NextResponse.json({ message: `Post request successful, id: ${id}`},{status: 200});
}