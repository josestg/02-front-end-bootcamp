import { useEffect, useState } from "react";

function Pekerjaan() {
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    setJob("Software Engineer");
    setSalary(10_000_000);
  }, []);

  return (
    <>
      <li>Job: {job}</li>
      <li>Salary: {salary}</li>
    </>
  );
}

function ProfileFC(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  // componentDidMount, ComponentDidUpdate, componentWillUnmount.
  // DONT USE ASYNC!
  //  https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
  useEffect(() => {
    console.count("componentDidMount");

    setAge(25);
    setName("Bob");

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
    console.log("Props changed", props);
  }, [props]);

  useEffect(() => {
    console.log("shouldComponentUpdate & componentDidUpdate", age);
  }, [age]);

  //   useEffect(() => {
  //     console.log("shouldComponentUpdate & componentDidUpdate", state);
  //   }, [state, props]);

  //   useEffect(() => {
  //     console.log("shouldComponentUpdate & componentDidUpdate", props);
  //   }, [props]);

  const handleOnClick = () => {
    console.count("handleOnClick");
    setAge(age + 1);
  };

  console.count("render");
  return (
    <ol>
      <li>Name: {name}</li>
      <li>Age : {age}</li>
      <Pekerjaan />
      <button onClick={handleOnClick}>Add Age</button>
    </ol>
  );
}

export default ProfileFC;
