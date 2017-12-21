import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

//这个是组件的类，不能写ReactDOM.render(是调用组件，并渲染)
class App extends Component {

    // ReactDOM.render(
    //   <h1>Hello, world!</h1>,
    //   document.getElementById('root')
    // );
    render() {

        function tick(name) {
            const elementOne = (
                <div>
                    <h1>Hello ,World!</h1>
                    {/*在html中使用变量需要使用{}*/}
                    <h2>It is {name} {new Date().toLocaleTimeString()}</h2>
                </div>
            );
            return elementOne;
        }


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {/*调用函数*/}
                {tick("guanbin")}
            </div>
        );
    }
}

// 声明组件，并引用时使用App来标识此组件；

export default App;