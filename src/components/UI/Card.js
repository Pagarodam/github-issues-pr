import Image from 'next/image';

const Card = (props) => {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl glass m-5 w-1/4 items-center">
        <figure>
          <Image
            src={props.avatar_url}
            alt={props.name}
            width={315}
            height={490}
            objectFit="contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>Name: {props.login}</p>

          <p>Componente: {component} </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => props.onButtonClick(id)}
              className={buttonColor}
            >
              {buttonLabel}
            </button>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => props.onEditWood(id)}
              className={`bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded`}
            >
              {"Edit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
