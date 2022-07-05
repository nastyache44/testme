import {Component, ReactDOM} from 'react';

class Map extends Component {
    render() {
        // don't render anything
        return <div/>;
    }

    componentDidMount() {
        // find the DOM node for this component
        const node = ReactDOM.findDOMNode(this);

        // widget does stuff
        $(node).activateMyCoolWidget();

        // start a new React render tree with widget node
        ReactDOM.render(<div>{this.props.children}</div>, node);
    }
}

export default Map;