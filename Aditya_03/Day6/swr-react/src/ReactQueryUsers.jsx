import { useQuery } from "@tanstack/react-query";

function ReactQueryUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()),
  });

  if (isLoading) return <p>React Query Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default ReactQueryUsers;
