export default async function Me({ params }: { params: { id: string } }) {
const { id } = await params
  return (
    <div>
      <h1>Me {id}</h1>
    </div>
  );
}