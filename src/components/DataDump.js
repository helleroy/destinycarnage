// @flow
import React, { Component } from 'react';

type Props = {
    data: any
}

class DataDump extends Component<Props> {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.data)}
            </div>
        );
    }
}

export default DataDump;
