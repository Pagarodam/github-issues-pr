const Form = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit} className="flex flex-col justify-center align-center">
        <div className="pl-4 pt-6">
          <label>Git User: </label>
          <input
            className="rounded-md border-black-500 border-4 ml-11"
            value={props.userInput}
            placeholder={"Git user"}
            onChange={props.userNameHandlerSearch}
          ></input>
        </div>
        <div className="pl-4 pt-3">
          <label>Repository: </label>
          <input
            className="border-4 rounded-md border-black-500 ml-6"
            value={props.repositoryInput}
            placeholder={"Enter a repository"}
            onChange={props.repositoryHandlerSearch}
          ></input>
        </div>
        <button className="mt-6 self-center text-neutral-50 rounded-full bg-blue-600 p-1 w-32" type="submit">Search</button>
      </form>
    </>
  );
};

export default Form;
