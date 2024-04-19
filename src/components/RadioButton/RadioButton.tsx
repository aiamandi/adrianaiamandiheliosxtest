import styles from "./RadioButton.module.css";

interface RadioButtonProps {
  id: string;
  value: string;
  handleAnswer: (value: string) => void;
}

export const RadioButton = ({ id, value, handleAnswer }: RadioButtonProps) => (
  <div className={styles.RadioButton}>
    <input type="radio" id={id} name="answer" value={value} onChange={() => handleAnswer(value)} />
    <label htmlFor={id}>{value}</label>
  </div>
);
