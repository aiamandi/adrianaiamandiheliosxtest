import { useState } from "react";
import styles from "./Questionnaire.module.css";
import { saveAnswer } from "../../helpers/saveAnswers";
import { RadioButton } from "../RadioButton/RadioButton";

interface QuestionnaireProps {
  title: string;
  description: string;
  questions: string[];
  thankYouMessage: string;
}

export const Questionnaire = ({
  title,
  description,
  questions,
  thankYouMessage,
}: QuestionnaireProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      // If all questions have been answered, send the data to the API.
      if (newIndex >= questions.length) {
        saveAnswer(newAnswers);
      } else {
        // Uncheck the radio buttons for the next question.
        const yesRadio = document.getElementById("yes") as HTMLInputElement;
        const noRadio = document.getElementById("no") as HTMLInputElement;
        if (yesRadio) yesRadio.checked = false;
        if (noRadio) noRadio.checked = false;
      }
    }, 1000);
  };

  const handlePrevious = () => {
    setTimeout(() => {
      const newIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newIndex);
    }, 1000);
  };

  return (
    <div className={styles.Questionnaire}>
      <h1 className={styles.Questionnaire__title}>{title}</h1>
      <p className={styles.Questionnaire__description}>{description}</p>
      {currentQuestionIndex < questions.length ? (
        <div className={styles.Questionnaire__questions}>
          <div className={styles.Questionnaire__question}>
            {currentQuestionIndex > 0 && (
              <button className={styles.Questionnaire__previous} onClick={handlePrevious}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            )}
            <p>{questions[currentQuestionIndex]}</p>
          </div>
          <div className={styles[`Questionnaire__questions-container`]}>
            <RadioButton id="yes" value="Yes" handleAnswer={handleAnswer} />
            <RadioButton id="no" value="No" handleAnswer={handleAnswer} />
          </div>
        </div>
      ) : (
        <p className={styles.Questionnaire__message}>{thankYouMessage}</p>
      )}
    </div>
  );
};
