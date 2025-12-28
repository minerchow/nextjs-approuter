import { Suspense } from 'react';
const DyamicContent = async()=>{
    const data = await fetch('https://www.mocklib.com/random/name');
    console.error("data2" ,data)
    const json = await data.json();
    return <div>{JSON.stringify(json)}</div>;
        
}
export default function Home() {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <DyamicContent />
        </Suspense>
      <h1>Home</h1>
    </div>
  );
}