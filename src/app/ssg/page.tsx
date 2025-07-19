import { Metadata } from 'next';

export const metadata: Metadata = {
title: 'SSG Page',
description: 'Static Site Generation Example',
};

async function fetchStaticData() {
// 模拟构建时数据获取，缓存策略为force-cache
const res = await fetch('https://cnodejs.org/api/v1/topics?limit=3&tab=dev&page=1', { cache: 'force-cache' });
return res.json();
}

export default async function Page() {
const data = await fetchStaticData();
return (
<div>
<h1>SSG (Static Site Generation)</h1>
<p>构建时生成的静态数据：{JSON.stringify(data)}</p>
</div>
);
}