import React from 'react';
import { Quiz } from './Quiz.js';

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: Quiz[this.state.currentQuestion].question,
        answer: Quiz[this.state.currentQuestion].answer,
        options: Quiz[this.state.currentQuestion].options,
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }

  closeQuiz = (_) => {
    const containerQuiz = document.querySelector('.container-quiz');
    containerQuiz.classList.remove('is-open');
  };

  nextQuestionHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: Quiz[this.state.currentQuestion].question,
          options: Quiz[this.state.currentQuestion].options,
          answer: Quiz[this.state.currentQuestion].answer,
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === Quiz.length - 1) {
      this.setState({
        isEnd: true,
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result__container">
          <div className="result">
            <div className="quiz__close">X</div>
            <h3 className="result__game">
              Votre score est de {this.state.score}/4 points{' '}
            </h3>
            <div className="container__result">
              <p className="good__answer">
                La bonne réponse aux questions était
              </p>
              <ul>
                {Quiz.map((item, index) => (
                  <li key={index} className="ui floating message options">
                    {item.answer}
                  </li>
                ))}
              </ul>
            </div>
            <div className="container__buttonOne">
              <button onClick={() => this.closeQuiz()} className="buttonOne">
                Retourner au chapitre
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="quizz">
          <div className="container__quizz">
            <div className="quiz__close">X</div>
            <h1 className="quizz__title">Questionnaire</h1>
            <h1 className="quizz__question">{this.state.questions} </h1>
            <span className="current_question">{`Questions ${
              currentQuestion + 1
            } sur ${Quiz.length} restantes `}</span>
            <div className="container__messages">
              {options.map((option, index) => (
                <div key={index} className="container__message">
                  <span
                    key={option.id}
                    className={`ui floating message options
                    ${myAnswer === option ? 'selected' : null}
                    `}
                    onClick={() => this.checkAnswer(option)}
                  >
                    <span className="index">{index + 1}</span>
                    <span>{option}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="container__button">
              {currentQuestion < Quiz.length - 1 && (
                <button
                  className="ui inverted button"
                  disabled={this.state.disabled}
                  onClick={this.nextQuestionHandler}
                >
                  Valider la réponse
                </button>
              )}
              {/* //adding a finish button */}
              {currentQuestion === Quiz.length - 1 && (
                <button
                  className="ui inverted button"
                  onClick={this.finishHandler}
                >
                  Terminer
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MainQuiz;
