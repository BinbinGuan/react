import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<App />, //引入组件，并把组件显示到div位置
		div);
});