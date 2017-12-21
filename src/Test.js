import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
//这个是组件的类，不能写ReactDOM.render(是调用组件，并渲染)
class Test extends Component {
  render() {
    return (
      <h1>Hello, world!</h1>
    );
  }
}

export default Test;