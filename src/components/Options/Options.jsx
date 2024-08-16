import css from "./Options.module.css";

export default function Options({ buttonName, onClick }) {
  return (
    <button className={css.mainButton} onClick={onClick}>
      {buttonName}
    </button>
  );
}
