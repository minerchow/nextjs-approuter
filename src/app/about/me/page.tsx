'use client'
import { useSearchParams } from "next/navigation";
export default function Me() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log("id", id)
  return (
    <div>
      <h1>Me</h1>
    </div>
  );
}
