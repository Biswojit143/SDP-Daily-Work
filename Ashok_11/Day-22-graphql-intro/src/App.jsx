import { gql, useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) {
    return <p style={{ marginTop: 40, textAlign: "center" }}>Loading GraphQL data...</p>;
  }

  if (error) {
    return (
      <p style={{ marginTop: 40, textAlign: "center", color: "red" }}>
        Error: {error.message}
      </p>
    );
  }

  return (
    <div style={{ paddingTop: "40px" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
        <h2>GraphQL Countries</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.countries.slice(0, 10).map((country) => (
            <li key={country.code}>
              {country.emoji} {country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;