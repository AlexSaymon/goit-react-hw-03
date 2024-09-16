import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={s.searchBox}
        type="text"
        value={value}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
