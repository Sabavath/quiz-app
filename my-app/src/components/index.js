import React, { Component } from 'react';
import { connect } from 'react-redux';

import data from '../utils/questions.json';
import backPNG from '../assets/prev.jpg';
import * as actions from '../actions/appActions';
import './index.css';

class Index extends Component {
    state = {
        questions: null,
        index: 0,
        showResults: false,
        answersScore: [],
        answerValue: []
    }
    componentWillMount() {
        this.setState({ questions: data.questions });
    }
    handleNextButton = () => {
        const { questions, index } = this.state;
        if (index !== (questions.length - 1)) {
            this.setState({ index: index + 1 });
        } else {
            this.setState({ showResults: true });
        }
    }
    BackButtonClick = () => {
        const { index } = this.state;
        this.setState({ index: index - 1 });
    }
    handleScore = option => {
      const { index, answersScore, answerValue } = this.state;
      answersScore[index] = option.score;
      answerValue[index] = option.value;
      this.props.setAppState({ answersScore });
      this.handleNextButton();
    }
  render() {
      const { questions, index, showResults, answerValue } = this.state;
      const { app: { score } } = this.props;
      const questionObj = questions[index];
      console.log(score);
    return (
      <div className="app-body">
        {!showResults && (
          <React.Fragment>
            <div class="app-header">
                {index > 0 && <img src={backPNG} onClick={this.BackButtonClick} alt="backButton" className="backPNG-image" />}
                <div className="question-step">Step {`${index+1} of ${questions.length}`}</div>
            </div>
            <div>
                <h1 className="question">{questionObj.question}</h1>
                <div className="options">
                  {questionObj.options.map(option => <button className={`button-style ${answerValue[index] === option.value && 'button-selected-style'}`} onClick={() => this.handleScore(option)}>{option.value}</button>)}
                </div>
            </div>
          </React.Fragment>
        )}
        {showResults && <div>Your Results: {score}</div>}
      </div>
    );
  }
}
const mapStoreToAction = {
   setAppState: actions.setAppState
};
  
export const mapStateToProps = state => ({
   app: state.app
});
  
export default connect(mapStateToProps, mapStoreToAction)(Index);
