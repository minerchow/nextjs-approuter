import { Metadata } from 'next';

export const metadata: Metadata = {
title: 'SSR Page',
description: 'Server-Side Rendering Example',
};

async function fetchServerData() {
// 模拟服务端数据获取
const res = await fetch('https://cnodejs.org/api/v1/topics?limit=3&tab=dev&page=1', { cache: 'no-store' });
return res.json();
}

export default async function Page() {
const data = await fetchServerData();
return (
<div>
<h1>SSR (Server-Side Rendering)</h1>
<p>服务端实时获取的数据：{JSON.stringify(data)}</p>
</div>
);
}