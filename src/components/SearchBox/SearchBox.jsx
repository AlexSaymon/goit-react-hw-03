import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={s.searchBox}
        type="text"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
