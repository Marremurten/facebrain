import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
   apiKey: '5bcc2debae5c47e0a438ea55b614d51b'
  });

class App extends Component{
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }





  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
     app.models
      .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
      .then(response => {
        console.log('hi', response)
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
    }

  render(){
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit= {this.onButtonSubmit}
      />

    </div>
  );
}
}

export default App;
