import React from 'react';

class ViewBuilding extends React.Component {
	
	render() {

		let id = 0;
		for(let i = 0; i < this.props.data.length; i++)
		{
			if(this.props.data[i].id === this.props.selectedBuilding)
			{
				id = i;
				break;
			}
		}

		return (
			<div className="lead blue-bottom">
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
				<p>ID: {this.props.data[id].id}</p>
				<p>Code: {this.props.data[id].code}</p>
				<p>Name: {this.props.data[id].name}</p>
				
				<p>Latitude: {this.props.data[id].coordinates ? this.props.data[id].coordinates.latitude : "N/A"}</p>
				<p>Longitude: {this.props.data[id].coordinates ? this.props.data[id].coordinates.longitude : "N/A"}</p>
				
				<address>Address: {this.props.data[id].address || "N/A"}</address>
			</div>
		);
	}
}
export default ViewBuilding;
