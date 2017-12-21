import React, {
    Component
} from 'react';

//这个是组件的类，不能写ReactDOM.render(是调用组件，并渲染)
class Clock extends React.Component {
    //构造函数是唯一能够初始化 this.state 的地方。
    //继承父类的构造函数，子组件中可以有父组件的属性和状态,也可以有自己的属性
    //数据是单向流动的，只能从上层往下流转
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    /**
     * 当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子。 在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 tick()。
     */
    componentDidMount() {
        //每一秒中调用一次，修改state中的date状态
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    /**
     * 当Clock组件从dom中移除，React会调用componentWillUnmount()这个钩子函数，定时器也就会被清除。
     */
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        //设置状态必须使用setState方法
        this.setState(
            {
                date: new Date()
            }
        );
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;