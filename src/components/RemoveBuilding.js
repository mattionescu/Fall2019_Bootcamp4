import React from 'react';

class RemoveBuilding extends React.Component {

    render() {

        return (
            <button
                type="button"
                className="btn-sm btn-danger"
                onClick={() => this.props.removeBuilding(this.props.id)}
                >Remove</button>
        )
    }
}

export default RemoveBuilding;