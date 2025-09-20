import React from 'react';
import { createRoot } from 'react-dom/client';

class Garage extends React.Component {
  render() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }
}

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964
    };
  }

  changeColor = () => {
    this.setState({ color: 'blue' });
  };

  render() {
    return (
      <div>
        <h2>I am a {this.props.model} Car!</h2>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'blue' });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML =
      'Before the update, the favorite was ' + prevState.favoritecolor;
    return null;
  }

  componentDidUpdate() {
    document.getElementById('div2').innerHTML =
      'The updated favorite is ' + this.state.favoritecolor;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <>
    <Garage />
    <Header favcol="yellow" />
  </>
);
