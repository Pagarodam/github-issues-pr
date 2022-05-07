import GitImage from "../..//assets/github-logo.png";
import SearchBar from "../UI/SearchBar";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>GitHub Issues Pull Request </h1>
      </header>
      <div className="px-20 mt-12 flex justify-center">
        <img className="max-w-screen-sm" src={GitImage} alt="A wonderfull GitHub logo" />
        {/* // TODO poner el formulario aquí */}
      </div>
        <SearchBar/>
    </>
  );
};

export default Header;