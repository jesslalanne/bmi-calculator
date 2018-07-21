import React, { Component } from 'react';
import './App.css';
import Range from './Components/Range.jsx';
import Output from './Components/Output.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 170,
      weight: 54,
      bmi: 18.7,
      bmiClass: 'Normal'
    }
  }

  heightChange(height){
    this.setState({height: height}, this.setBmi);
  }

  weightChange(weight){
    this.setState({weight: weight}, this.setBmi);
  }

  setBmi(){
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({bmi: bmi, bmiClass: this.getBmiClass(bmi)}, function(){
      console.log(this.state);
    });
  }

  getBmiClass(bmi) {
    if(bmi < 18.5) return 'Poids trop faible';
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if(bmi >= 25 && bmi <= 29.9) return 'Surpoids';
    if(bmi >= 30) return 'Obese';
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Taille (cm)</label>
            <Range value ={this.state.height} onChange = {this.heightChange.bind(this)} />
          </div>
          <div>
            <label>Poids (kg)</label>
            <Range value ={this.state.weight} onChange = {this.weightChange.bind(this)} />
          </div>
        </form>
        <Output data = {this.state} />
      </div>
    );
  }
}

export default App;
