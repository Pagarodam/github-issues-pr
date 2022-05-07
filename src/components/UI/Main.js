import { useState } from "react";
import IssueDetail from "../Issues/IssueDetail";
import RepoList from "../Repos/RepoList";
import Form from "./Form";
import Modal from "./Modal";

const SearchBar = () => {
  const [userData, setUserData] = useState("");
  const [repos, setRepos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [comments, setComments] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [userInput, setUserInput] = useState("");
  const [repositoryInput, setRepositoryInput] = useState("");
  const [error, setError] = useState(null);

  const userNameHandlerSearch = (event) => {
    setUserInput(event.target.value);
  };

  const repositoryHandlerSearch = (event) => {
    setRepositoryInput(event.target.value);
  };

  const getRepoInfo = (user, repo) => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setError(null);
          getIssues(res.issues_url);
          setRepos([]);
          setUserInput("");
          setRepositoryInput("");
        }
      });
  };

  const getUserRepos = (user) => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setUserData(res);
          getRepos(res.repos_url);
          setIssues([]);
          setError(null);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!repositoryInput && userInput) {
      getUserRepos(userInput);
    } else if (repositoryInput && userInput) {
      getRepoInfo(userInput, repositoryInput);
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
          setIssues(res);
          setError(null);
        }
      });
  };

  const clickRepository = (repoName, userName) => {
    getRepoInfo(userName, repoName);
  };

  const clickIssue = (event) => {
    getComments(event.comments_url);
    setModalData(event);
  };

  const getComments = (urlComments) => {
    fetch(urlComments)
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setError(res.message);
        } else {
          setComments(res);
          setError(null);
        }
      });
  };

  const closeMessageHandler = () => {
    setModalData(null);
  };

  return (
    <>
      {modalData && (
        <Modal
          data={modalData}
          onClose={closeMessageHandler}
          comments={comments}
        >
          <div>
            <p className="text-center p-5 text-3xl font-mono">
              {modalData.title}
            </p>
          </div>
          {modalData.body && (
            <div>
              <h1 className="text-center pt-8 text-2xl font-mono">
                Description
              </h1>
              <p className="p-4">{modalData.body}</p>
            </div>
          )}

          {!!comments?.length && (
            <ul>
              <h1 className="text-center pt-8 text-2xl font-mono">Comments</h1>
              {comments.map((comment) => (
                <div className="border-2 rounded-lg m-3 p-3 border-blue-500 border-blue-700">
                  <p><b>Author:</b> {comment.user.login}</p>
                  <p>
                    <b>Creation date:{" "}</b>
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                  <li className="p-4">
                    {console.log(comment)}
                    {comment.body}
                  </li>
                </div>
              ))}
            </ul>
          )}
          <button
            className="mb-6  ml-100 ml-6  text-neutral-50 rounded-full bg-blue-600 p-1 w-32"
            onClick={closeMessageHandler}
          >
            Cerrar
          </button>
        </Modal>
      )}
      <Form
        onSubmit={handleSubmit}
        userInput={userInput}
        userNameHandlerSearch={userNameHandlerSearch}
        repositoryInput={repositoryInput}
        repositoryHandlerSearch={repositoryHandlerSearch}
      />
      {error ? (
        <h1 className="text-center p-5 text-3xl font-mono">{error}</h1>
      ) : (
        <>
          {userData && (
            <RepoList data={userData} repos={repos} onClick={clickRepository} />
          )}
          <div className="grid-cols-2">
            {issues && <IssueDetail data={issues} onClick={clickIssue} />}
          </div>
        </>
      )}
    </>
  );
};

export default SearchBar;
