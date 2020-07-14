import React, {Component} from "react";
import classes from './App.module.css';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in1: '',
      in2: '',
      errorMessage1: '',
      errorMessage2: '',
      inputStyle1: {
        border: '',
        color: '',
      },
      inputStyle2: {
        border: '',
        color: '',
      },
    };
  }

  currentInput1 = (elem) => {
    this.setState({in1: elem.target.value});
  }
  currentInput2 = (elem) => {
    this.setState({in2: elem.target.value});
  }
  buttonFunc = () => {
    if (this.state.in1.length < 8) {
      this.setState({
        errorMessage1: 'Your Username should be at least 8 characters.',
        inputStyle1: {border: '0.05em solid darkred', color: 'darkred'},
      });
    } else if (this.state.in1.length >= 8) {
      this.setState({errorMessage1: '', inputStyle1: {border: '', color: ''}});
    }
    if (this.state.in2.length < 8) {
      this.setState({
        errorMessage2: 'Your Password should be at least 8 characters.',
        inputStyle2: {border: '0.05em solid darkred', color: 'darkred'},
      });
    } else if (this.state.in2.length >= 8) {
      this.setState({errorMessage2: '', inputStyle2: {border: '', color: ''}});
    }
    if (this.state.in1.length >= 8 && this.state.in2.length >= 8) {
      alert('Correct inputs.');
    }
  }

  render() {
    return (
        <div className={classes.main}>
          <h1 className={classes.login}>Login</h1>
          <div className={classes.inputs}>
            <input onChange={this.currentInput1} className={classes.input1} type='input'
                   placeholder='Username' style={this.state.inputStyle1}/>
            <p className={classes.p1}>{this.state.errorMessage1}</p>
            <input onChange={this.currentInput2} className={classes.input2} type='input'
                   placeholder='Password' style={this.state.inputStyle2}/>
            <p className={classes.p2}>{this.state.errorMessage2}</p>
          </div>
          <div className={classes.signInButton}>
            <Button func={this.buttonFunc} isDisabled={this.state.in1.length < 3 || this.state.in2.length < 3}/>
          </div>
        </div>
    )
  }
}

export default App;