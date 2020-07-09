import React from "react";
import { quizData } from "./quizData";
import { Link } from "react-router-dom";

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div class="result__container">
          <div className="result">
            <h3 className="result__game">
              Votre score est de {this.state.score}/4 points{" "}
            </h3>
            <div className="container__result">
              <p className="good__answer">
                La bonne réponse aux questions était
              </p>
              <ul>
                {quizData.map((item, index) => (
                  <li className="ui floating message options" key={index}>
                    {item.answer}
                  </li>
                ))}
              </ul>
            </div>
            <div className="container__buttonOne">
              <Link to="/">
                <button className="buttonOne">Retourner au menu</button>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="quizz">
          <div className="container__quizz">
            <h1 className="title">Questionnaire</h1>
            <h1 className="question">{this.state.questions} </h1>
            <span className="current_question">{`Questions ${currentQuestion +
              1} sur ${quizData.length} restantes `}</span>
            <div className="container__messages">
              {options.map((option, index) => (
                <div className="container__message">
                  <p
                    key={option.id}
                    className={`ui floating message options
                    ${myAnswer === option ? "selected" : null}
                    `}
                    onClick={() => this.checkAnswer(option)}
                  >
                    <p className="index">{index + 1}</p>
                    <p>{option}</p>
                  </p>
                </div>
              ))}
            </div>
            <div className="container__button">
              {currentQuestion < quizData.length - 1 && (
                <button
                  className="ui inverted button"
                  disabled={this.state.disabled}
                  onClick={this.nextQuestionHandler}
                >
                  Valider la réponse
                </button>
              )}
              {/* //adding a finish button */}
              {currentQuestion === quizData.length - 1 && (
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
