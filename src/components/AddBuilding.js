import React from 'react';

class AddBuilding extends React.Component {

    getBuildingData() {
        let data = {};

        if(this.code)
            data.code = this.code.value;
        
        if(this.name)
            data.name = this.name.value;

        if(this.address)
            data.address = this.address.value;

        if(this.latitude && this.longitude)
        {
            data.coordinates = {
                latitude: this.latitude.value,
                longitude: this.longitude.value
            };
        }
        console.log('tried adding data: ', data);

        return data;
    }

    render() {

        return (
            <div>
                <br />
                <br />
                <h1>Add a building to the listing:</h1>
                <br />
                <br />
                {' '}
                <form>

                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label>Code:</label>
                                <input type="text"
                                    ref={ (value) => this.code = value}
                                    className="form-control"
                                    placeholder="Enter code here..." />
                            </div>
                            <div className="col-8">
                                <label>Name:</label>
                                <input type="text"
                                    ref={ (value) => this.name = value}
                                    className="form-control form-control-sm"
                                    placeholder="Enter name here..." />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label>Latitude:</label>
                                <input type="number"
                                    ref={ (value) => this.latitude = value}
                                    className="form-control"
                                    placeholder="Enter latitude here..." />
                            </div>
                            <div className="col">
                                <label>Longitude:</label>
                                <input type="number"
                                    ref={ (value) => this.longitude = value}
                                    className="form-control"
                                    placeholder="Enter longitude here..." />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text"
                            ref={ (value) => this.address = value}
                            className="form-control"
                            placeholder="Enter address here..." />
                    </div>

                    <button
                        type="button"
                        className="btn-lg btn-success"
                        onClick={() => this.props.addBuilding(this.getBuildingData())}>
                            Add Building</button>
                    <p className="alert alert-primary">{this.props.addBuildingText}</p>
                </form>
            </div>
        )
    }
}

export default AddBuilding;