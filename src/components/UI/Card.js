const Card = ({data, onClick}) => {
  const pullOrIssue = data.html_url.includes("pull") ? "Pull" : "Issue";

  return (
    <div
      onClick={() => onClick(data)}
      className={`hover:cursor-pointer hover:bg-gray-100 card-body rounded-lg bg-gray-300 border-4 m-6 p-5 ${pullOrIssue === 'Pull' ? 'hover:border-red-500 border-red-700' : 'hover:border-blue-500 border-blue-700'}`}
    >
      <h2 className="text-center text-2xl border-2 rounded-full ">
        {pullOrIssue}
      </h2>
      <p>Title: {data.title}</p>
      <p>Author username: {data.user.login} </p>
      <p>
        Date of creation:
        {new Date(data.created_at).toLocaleDateString()}
      </p>
      <p>Number of comments: {data.comments}</p>
      <li>Labels:</li>
      {data.labels?.map((label) => (
          <ul key={label.id}>
            <li>{label.name}</li>
          </ul>
        ))}
    </div>
  );
};

export default Card;
