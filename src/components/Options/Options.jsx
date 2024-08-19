import css from "./Options.module.css";

export default function Options({ options, onClick, showReset }) {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          className={css.mainButton}
          onClick={() => onClick(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {showReset && (
        <button
          key="reset"
          className={css.mainButton}
          onClick={() => onClick("reset")}
        >
          Reset
        </button>
      )}
    </div>
  );
}
