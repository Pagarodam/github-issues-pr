import GitImage from "../..//assets/github-logo.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>GitHub: searching for issues & pull request </h1>
      </header>
      <div className="px-20 mt-12 flex justify-center">
        <img className="max-w-screen-sm" src={GitImage} alt="A wonderfull GitHub logo" />
      </div>
    </>
  );
};

export default Header;