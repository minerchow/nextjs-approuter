import { Metadata } from 'next';

interface PageParams {
  id: string;
}

export const metadata: Metadata = {
  title: 'ISR Page',
  description: 'Incremental Static Regeneration Example',
};

export async function generateStaticParams() {
  // 模拟获取需要生成的参数
  const res = await fetch('https://cnodejs.org/api/v1/topics?limit=3&tab=dev&page=1', { cache: 'force-cache' });
  const posts = await res.json();
  return posts
}

export default async function Page({ params }: { params: PageParams }) {
  const res = await fetch(`https://cnodejs.org/api/v1/topics?limit=3&tab=dev&page=${params.id}`, {
    next: { revalidate: 60 }, // 60秒后重新验证
  });
  const post = await res.json();

  return (
    <div>
      <h1>ISR (Incremental Static Regeneration)</h1>
      {JSON.stringify(post)}
    </div>
  );
}