import { Fetch } from "../hooks/fetch";

function Users(props) {
  const { loading, state, error } = Fetch(
    "https://jsonplaceholder.typicode.com/users",
    []
  );

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>Users Page</h1>

      {state.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
