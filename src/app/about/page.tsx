import Link  from "next/link";
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  return data;
};
export default async function About() {
  const data = await getData();
  return (
    <div>
      <h1>About</h1>
      <p>
        <Link href="/about/me">me</Link>
        <Link href={{pathname: '/about/me', query: {id: data.id}}}>me带参数</Link>
        <div></div>
      </p>
    </div>
  );
}