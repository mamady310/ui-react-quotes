import React, { Component } from 'react';
class Quote extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
            <p>{this.props.jokes}</p>
            </div>
        )
    }
}


export default Quote