import { Suspense } from "react";
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
      <header>
        <h1>About Layout</h1>
      </header>
      {children}
      <footer>
        <h2>About Footer</h2>
      </footer>
    </div>
    </Suspense>
  );
};
