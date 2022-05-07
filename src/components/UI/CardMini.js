const CardMini = (props) => {
  return (
    <>
      {props.repos.map((repo) => (
        <div
          key={repo.id}
          onClick={() => props.onClick(repo.name, repo.owner.login)}
          className="hover:cursor-pointer hover:bg-gray-100 hover:border-blue-300 rounded-lg bg-gray-300 border-4 m-6 p-5 border-blue-500"
        >
          <div>Name: {repo.name}</div>
          <div>Id: {repo.id}</div>
        </div>
      ))}
    </>
  );
};
export default CardMini;
