import React from 'react'

class Callback extends React.Component {

    componentDidMount() {
        window.setTimeout(window.opener.SC.connectCallback, 1);
    }
    render() {
        return <div><p>this page should clouse soon</p></div>;

    }

}

export default Callback