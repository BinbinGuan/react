import React, {
    Component
} from 'react';
//这个是组件的类，不能写ReactDOM.render(是调用组件，并渲染)
class Test extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}!</h1>
        );
    }
}

export default Test;