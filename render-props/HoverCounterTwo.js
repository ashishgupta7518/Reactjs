

import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    render() {
        const { count, IncrementCount } = this.props
        return (
            <h2 onMouseOver={IncrementCount}>Mouse hover {count} times</h2>
        )
    }
}

export default HoverCounterTwo
