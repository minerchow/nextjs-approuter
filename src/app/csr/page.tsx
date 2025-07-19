'use client';

import { Metadata } from 'next';
import { useState, useEffect } from 'react';



function fetchClientData() {
  // 模拟客户端数据获取
  return fetch('https://cnodejs.org/api/v1/topics?limit=3&tab=dev&page=1').then(res => res.json());
}

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClientData()
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>CSR (Client-Side Rendering) 数据加载中...</div>;
  if (error) return <div>错误：{error}</div>;

  return (
    <div>
      <h1>CSR (Client-Side Rendering)</h1>
      <p>客户端获取的数据：{JSON.stringify(data)}</p>
    </div>
  );
}