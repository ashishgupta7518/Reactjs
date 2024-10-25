

import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    IncrementCount = () => {
        this.setState(prevstate => {
            return { count: prevstate.count + 1 }
        })
    }


    render() {
        return (
            <div>{this.props.render(this.state.count, this.IncrementCount)}</div>
        )
    }
}

export default Counter
