import { useEffect, useState } from "react";

const AvailableUsers = (props) => {
  // const [data, setData] = useState([]);
  // const [repos, setRepos] = useState([]);
  // const [data, setData] = useState([]);



  // useEffect(() => {
  //   fetch("https://api.github.com/users/Pagarodam")
  //   // fetch(`https://api.github.com/users/${user}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // },[]);

  // const handleRepos = (data)=> {
  //   setRepos(data.repos_url);
  // }

  return (
    <div>
      <p>User: {props.login}</p>
      <p>Public repos: {props.public_repos}</p>
      <p>{props.repos_url}</p>
    </div>
  );
};

export default AvailableUsers;
