import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Condition from './component/Condition.js';
import Test from './component/test.js';
import Clock from './component/Clock.js';

import registerServiceWorker from './registerServiceWorker';

function formatName(user) {
    return user.firstName + '' + user.lastName;
}



function getGreeting(user) {
    if (user) {
        return <h1>Hello ,{formatName(user)}!</h1>;
    } else {
        return <h1>Hello ,Stranger!</h1>;
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>
}

const user = {
    firstName: 'Bin',
    lastName: 'guan'
};
//如果既要写html和js则需要加括号,也可以不加,jsx语法
const element = (<h1>Hello ,{formatName(user)}</h1>);

const elementReact = (
    <h1 className='greeting'>
        Hello ,Word!
    </h1>
);
const elementTest = React.createElement(
    'h3',
    {className: 'greeting'},//定义这个元素的className是greeting
    'hello word!'
);
// const element1 = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         array: 'Hello, world'
//     }
// };
function tick(name) {
    const elementOne = (
        <div>
            <h1>Hello ,World!</h1>
            {/*在html中使用变量需要使用{}*/}
            <h2>It is {name} {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(elementOne, document.getElementById('root'));
}

// setInterval(tick,1000,"guanbin");
function test() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

function test1() {
    ReactDOM.render(<Test name={"GuanBin,haha"}/>, document.getElementById('root'))
}

// ReactDOM.render(<Clock/>, document.getElementById('root'));
ReactDOM.render(<Greeting isLoggedIn={false}/>, document.getElementById('root'));
//ReactDom只渲染一次，所以要调用setInterval来进行不时的刷新
// setInterval(test, 1000);

//render中第一个元素可以是常量，可以是函数，也可以是组件；
registerServiceWorker();