import css from "./Options.module.css";

export default function Options({ options, onClick }) {
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
    </div>
  );
}
