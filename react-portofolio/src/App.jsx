import { useEffect, useState } from "react";
import Profile from "./components/profile/Profile";
import * as userRepository from "./data/user.data";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userRepository.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  // const tranformer = (user) => {
  //   const url = user.url;
  //   const id = user.id;
  //   return <Avatar key={id} url={url} />;
  // };

  // const tranformer = (user) => {
  //   const { id, url } = user;
  //   return <Avatar key={id} url={url} />;
  // };

  // without default value.
  // const tranformer = ({ id, url }) => <Avatar key={id} url={url} />;

  // with default value.
  // const tranformer = ({ id = 0, url = "" }) => <Avatar key={id} url={url} />;

  // when some id are missing.
  // const tranformer = ({ id = 0, url = "" }, index) => (
  //   <Avatar key={id === 0 ? index + 1 : id} url={url} />
  // );

  if (users.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <section>
      {/* <Profile avatarURL="https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg" /> */}

      {/* {users.map(({ id, url }) => (
        <Avatar key={id} url={url} />
      ))} */}

      {/* {users.map(({ id, url, name, job, bio }) => (
        <Profile
          key={id}
          id={id}
          name={name}
          job={job}
          bio={bio}
          avatarURL={url}
        />
      ))} */}

      {users.map((user) => (
        <Profile key={user.id} user={user} />
      ))}
    </section>
  );
}

export default App;
