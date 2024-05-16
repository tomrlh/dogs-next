export default async function ProfileUserIdPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <main>
      <h1>User: {params.user}</h1>
    </main>
  );
}
