import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class loader extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="text-center">
                <div className="spinner-border text-dark text-center my-3" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        )
    }
}
