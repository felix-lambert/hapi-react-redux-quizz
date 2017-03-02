import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {addAnswer, fetchQuizz, requestQuizz} from '../actions';
import { getQuizz, getIsFetching } from '../reducers';

/* 
  For ES6 classes, getInitialState has been deprecated in 
  favor of declaring an initial state object in the constructor
 */
class Quizz extends Component {

  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption: '',
      result: ''
    };
  };

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchQuizz, requestQuizz } = this.props;
    requestQuizz();
    fetchQuizz();
  }

  render() {
    if (this.props.quizz[6] && this.props.quizz[6].result) {
      return (
        <div>
          <br/>
          <div className="jumbotron">
            <h1 className="text-center">You had {this.props.quizz[6].result} out of 20. Please reload the page if you want to try again</h1>
          </div>
        </div>);
    }
    if (this.props.isFetching && !this.props.quizz.length) {
      return (
        <div>
          <br/>
          <p className="text-center">Loading...</p>
        </div>);
    }
    return (
      <div>

        <h1 className="text-center">What is the name of this technique?</h1>
        <form className="text-center" 
          onSubmit={e => {
            e.preventDefault();
            let response = 'false'
            if (this.state.selectedOption === this.state.result) {
              response = 'true'
            }
            const { addAnswer } = this.props;
            requestQuizz();
            addAnswer({
              answer: response
            });
          }}
        >
          {this.props.quizz.map((object, i) => {

            if (i == 6) {
              return <div className={"row"} key={i}> <h2>{object.question}</h2></div>;
            }
            if (i == 5) {
              this.state.result = object.name;
              return <div className={"row"} key={i}>
                <p className="text-center">

                  <iframe src={object.link} width="480" height="321" frameBorder="0" allowFullScreen>
                  </iframe>
                </p>
              </div>;
            }
            if (i < 5) {
            return <div className={"row"} key={i}> 
              <div className="radio">

                <label>
                    <input type="radio" value={object.name} 
                    checked={this.state.selectedOption === object.name}
                    onChange={this.handleOptionChange}/>
                    {object.name}
                </label>
              </div>
              
              </div>; 
            }
              
           })}
           <button className="btn btn default text-center" type="submit">Submit answer</button>
        </form>
      </div>

    );
  }
}

Quizz.propTypes = {
  fetchQuizz: PropTypes.func.isRequired,
  addAnswer: PropTypes.func.isRequired,
  requestQuizz: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { params }) => {
  return {
    quizz: getQuizz(state),
    isFetching: getIsFetching(state)
  };
};

Quizz = withRouter(connect(
  mapStateToProps,
  {fetchQuizz, addAnswer, requestQuizz}
)(Quizz));

export default Quizz;
