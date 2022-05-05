import { useState } from "react";

const RepoList = (props) => {
  return (
    <>
      <p>User: {props.data.login}</p>
      <p>Public repos: {props.data.public_repos}</p>
      <p>{props.data.repos_url}</p>
      {props.repos.map((repo) => (
        <ul key={repo.id}>
          <li>Id: {repo.id}</li>
          <li>Name: {repo.name}</li>
        </ul>
      ))}
    </>
  );
};

const IssueDetail = (props) => {
  return (
    <>
      {/* <p>{props.data.created_at}</p> */}
      {props.data.map((issue) => (
        <ul key={issue.id}>
          <li>Title: {issue.title}</li>
          <li>Author username: {issue.user.login}</li>
          <li>
            Date of creation: {new Date(issue.created_at).toLocaleDateString()}
          </li>
          <li>Number of comments: {issue.numberOfComments}</li>
        </ul>
      ))}
      {/*<p>Number of comments: Hacer un fetch</p>
      <p>List of labels: Hacer otro puto fetch</p>
      <p>issue o PR?? </p> */}
    </>
  );
};

const SearchBar = (props) => {
  const [userData, setUserData] = useState("");
  const [repoData, setRepoData] = useState("");
  const [repos, setRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  
  // const [issueDetails, setIssueDetails] = useState({
  //   issue:'',
  //   numberOfCommits:''
  // });



  const [numberOfComments, setNumberOfComments] = useState([]);

  const [userInput, setUserInput] = useState("");
  const [repositoryInput, setRepositoryInput] = useState("");
  const [error, setError] = useState(null);

  const userNameHandlerSearch = (event) => {
    setUserInput(event.target.value);
  };

  const repositoryHandlerSearch = (event) => {
    setRepositoryInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!repositoryInput && userInput) {
      fetch(`https://api.github.com/users/${userInput}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            setError(res.message);
          } else {
            setUserData(res);
            getRepos(res.repos_url);
            setError(null);
          }
        });
    } else if (repositoryInput && userInput) {
      fetch(`https://api.github.com/repos/${userInput}/${repositoryInput}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.message) {
            setError(res.message);
          } else {
            setError(null);
            setRepoData(res);
            getIssues(res.issues_url);
            getNumberOfComments(res.comments_url);
            console.log("handle summit " + res.comments_url);
            setUserInput("");
            setRepositoryInput("");
          }
        });
    }
  };

  const getRepos = (urlRepos) => {
    fetch(urlRepos)
      .then((res) => res.json())
      .then((res) => {

        if (res.message) {
          setError(res.message);
        } else {
          setRepos(res);
          setError(null);
        }
      });
  };

  const getIssues = (urlIssues) => {
    urlIssues = urlIssues.split("{")[0];
    fetch(urlIssues)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          console.log("issues number" + res.length)
          setIssues(res);
          setError(null);
        }
      });
  };

  const getNumberOfComments = (urlComments) => {
    urlComments = urlComments.split("{")[0];
    console.log("getNumberOfComments " + urlComments);
    fetch(urlComments)
    .then((res) => res.json())
    .then((res) => {
      console.log("numberOfcomments " + res.length)
      if (res.message) {
        setError(res.message);
      } else {
        setNumberOfComments(res.lenght);
        setError(null);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={userInput}
          placeholder={"Git user"}
          onChange={userNameHandlerSearch}
        ></input>
      </div>
      <div>
        <input
          value={repositoryInput}
          placeholder={"Enter a repository"}
          onChange={repositoryHandlerSearch}
        ></input>
      </div>
      <button type="submit">Search</button>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          {userData && <RepoList data={userData} repos={repos} />}
          {issues && <IssueDetail data={issues} numberOfComments={numberOfComments}/>}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
