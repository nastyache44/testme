// import './someLib/dist/mapdata.js';
// import './someLib/dist/countrymap.js';
import React from 'react';
import './App.css';
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";

// const Demo = props => (
//     <div className="application">
//         <Helmet>
//             <script src="./someLib/dist/mapdata.js" type="text/javascript" />
//         </Helmet>
//         <Helmet>
//             <script src="./someLib/dist/countrymap.js" type="text/javascript" />
//         </Helmet>
//     </div>
// );

const e = React.createElement;

class App extends React.Component {

    render() {
        return e('div', {id:'map'})
    }

    componentDidMount(){
        simplemaps_countrymap.load();
    }
}

// const domContainer = document.querySelector('#react_container');
// ReactDOM.render(e(SimpleMapsComponent), domContainer);

export default App;
