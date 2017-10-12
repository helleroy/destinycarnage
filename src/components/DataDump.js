import React, { Component } from 'react';

class DataDump extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.data)}
            </div>
        );
    }
}

export default DataDump;
