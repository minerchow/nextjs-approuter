import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(request: NextRequest){
    //const body = await request.formData(); //接受formData数据
    //const body = await request.text(); //接受text数据
    //const body = await request.arrayBuffer(); //接受arrayBuffer数据
    //const body = await request.blob(); //接受blob数据
    const body = await request.json(); //接受json数据
    console.log(body); //打印请求体中的数据
    if(body.admin === 'admin' && body.password === '123456'){
      
        const cookieStore = await cookies();
        cookieStore.set('token','1234567890',{
            httpOnly:true,
            maxAge:60*60,
        });
        cookieStore.set('name','admin');
        return NextResponse.json({ message: 'Login successful',code:1},{status: 200});
    }else{
        return NextResponse.json({ message: 'Login failed',code:0},{status: 200});
    }
     //返回json数据
}

export async function GET(request: NextRequest){
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    if(token && token.value && token.value === '1234567890'){
        return NextResponse.json({ message: 'Get request successful',code:1},{status: 200});
    }else{
        return NextResponse.json({ message: 'No token found',code:0},{status: 200});
    }
}