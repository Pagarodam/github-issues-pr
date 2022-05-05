import GitImage from "../..//assets/github-logo.png";
import SearchBar from "../UI/SearchBar";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>GitHub Issues Pull Request </h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={GitImage} alt="A wonderfull GitHub logo" />
      </div>
      <SearchBar/>
    </>
  );
};

export default Header;