import { Metadata } from 'next';

export const dynamicParams = true;

type IdParams = {
  params: {
    id: string;
  };
};

// 定义需要预生成的静态参数
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
};

// 页面组件（异步组件支持数据获取）
export default async function IsrPage({ params }: IdParams) {
  const { id } = await params
  // 获取数据并设置10秒后重新验证（ISR核心配置）
  const res = await fetch(`https://cnodejs.org/api/v1/topics?limit=3&tab=dev&page=${id}`, {
    next: { revalidate: 10 }
  });
  const data = await res.json();

  return (
    <div>
      <h1>ISR Page: {id}</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

// 可选元数据配置
export const metadata: Metadata = {
  title: `ISR Page`,
  description: 'Incremental Static Regeneration Example',
};