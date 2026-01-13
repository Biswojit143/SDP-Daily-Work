import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function SwrUsers() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (isLoading) return <p>SWR Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default SwrUsers;
