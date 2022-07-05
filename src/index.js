import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const e = React.createElement;

class SimpleMapsComponent extends React.Component {

    render() {
        return e('div', {id:'map'})
    }

    componentDidMount(){
        simplemaps_countrymap.load();
    }
}

const domContainer = ReactDOM.createRoot(document.getElementById('root'));
domContainer.render(React.createElement(SimpleMapsComponent));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       {React.createElement(App)}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
