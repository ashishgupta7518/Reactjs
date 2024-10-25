

import React, { Component } from 'react'

class ClickCounterTwo extends Component {


    render() {
        const { count, IncrementCount } = this.props
        return (
            <button onClick={IncrementCount}>click count is{count} </button>
        )
    }
}

export default ClickCounterTwo
