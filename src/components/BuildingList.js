import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	
	render() {
		//console.log('This is my directory file', this.props.data);
		//const { data } = this.props.data;
		
		const buildingList = this.props.data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}
						onClick={() => {this.props.selectedUpdate(directory.id)}}>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
						<RemoveBuilding id={directory.id}
							removeBuilding={this.props.removeBuilding} />
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
