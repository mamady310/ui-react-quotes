import React, { Component } from 'react';
class Button extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.thisButton}>{this.props.label}</button>
            </div>
        )
    }
}


export default Button