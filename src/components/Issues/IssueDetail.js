import Card from "../UI/Card";

const IssueDetail = (props) => {
  return (
    <>
      <div className={"grid grid-cols-2 gap-1 "}  >
        {props.data.map((issue) => (
          <Card data={issue} onClick={props.onClick} />
        ))}
      </div>
    </>
  );
};

export default IssueDetail;
