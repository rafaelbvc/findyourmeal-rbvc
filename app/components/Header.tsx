import SearchBar from "./SearchBar";
import * as styles from "./styles/HeaderStyles"

const Header = () => {
  return (
    <div className={`${styles.returnStyesHeader.divMain}`}>
      <div className={`${styles.returnStyesHeader.divFindYourTable}`}>
        <h1 className={`${styles.returnStyesHeader.h1FindYourTable }`}>
          Find Your Table For Any Occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
