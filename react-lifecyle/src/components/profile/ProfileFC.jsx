import { useEffect, useState } from "react";

function ProfileFC(props) {
  const [state, setState] = useState({ name: "", age: 0 });

  // componentDidMount, ComponentDidUpdate, componentWillUnmount.
  useEffect(() => {
    console.count("componentDidMount");
    const copy = Object.assign({}, state);

    copy.name = "Bob";
    copy.age = 25;

    setState(copy);

    const timer = setInterval(() => {
      console.count("tick");
    }, 1 * 1000); // 1s

    return () => {
      console.count("componentWillUnmount dipanggil");
      clearInterval(timer);
    };

    // jika array (depedencies) kosong <-> [],
    // maka ini sama dengan componentDidMount
  }, []);

  useEffect(() => {
    console.log("shouldComponentUpdate & componentDidUpdate", state);
  }, [state]);

  //   useEffect(() => {
  //     console.log("shouldComponentUpdate & componentDidUpdate", state);
  //   }, [state, props]);

  //   useEffect(() => {
  //     console.log("shouldComponentUpdate & componentDidUpdate", props);
  //   }, [props]);

  const handleOnClick = () => {
    console.count("handleOnClick");
    const copy = Object.assign({}, state);
    copy.age++;
    setState(copy);
  };

  console.count("render");
  return (
    <ol>
      <li>Name: {state.name}</li>
      <li>Age : {state.age}</li>
      <button onClick={handleOnClick}>Add Age</button>
    </ol>
  );
}

export default ProfileFC;
