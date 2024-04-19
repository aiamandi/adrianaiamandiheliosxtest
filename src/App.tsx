import { QuestionnaireContent } from "../public/assets/Content";
import { Logo } from "./components/Logo/Logo";
import { Questionnaire } from "./components/Questionnaire/Questionnaire";
import styles from "./App.module.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  const questions = QuestionnaireContent;
  return (
    <div className={styles.App}>
      <Logo />
      <Questionnaire
        title={questions.title}
        description={questions.description}
        questions={questions.questions}
        thankYouMessage={questions.thank_you_message}
      />
      <Footer />
    </div>
  );
}

export default App;
