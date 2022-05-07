import CardMini from "../UI/CardMini";

const RepoList = (props) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center p-5 text-3xl font-mono">{props.data.repos_url}</h1>
        <p>User: {props.data.login}</p>
        <p>Public repos: {props.data.public_repos}</p>
      </div>
      <div className="grid grid-cols-4 gap-2 " >
        <CardMini repos={props.repos} onClick={props.onClick}/>
      </div>
    </>
  );
};

export default RepoList;
