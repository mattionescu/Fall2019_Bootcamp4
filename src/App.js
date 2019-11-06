import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data,
      addBuildingText: '',
      nextId: this.props.data.length + 1
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function

    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function

    this.setState({
      selectedBuilding: id
    });
  }

  buildingIsValid(bldgData) {
    if(!bldgData)
    {
      console.log('none');
      return false;
    }
    if(!bldgData.code)
    {
      console.log('code');
      return false;
    }
    if(!bldgData.name)
    {
      console.log('name');
      return false;
    }
    if(!bldgData.address)
    {
      console.log('address');
      return false;
    }

      return true;
  }

  buildingExists(bldgData) {
    for(let i = 0; i < this.state.data.length; i++)
    {
      let bldg = this.state.data[i];
      if(bldg.code === bldgData.code || bldg.name === bldgData.name)
        return true;
    }

    return false;
  }

  addBuilding(bldgData) {
    if(!this.buildingIsValid(bldgData))
    {
      this.setState({
        addBuildingText: 'Error: Your building must have at least a code, name, and address!'
      });
      console.log('building invalid');
      return;
    }

    if(this.buildingExists(bldgData))
    {
      this.setState({
        addBuildingText: 'Error: That building is already in the listing!'
      });
      console.log('building exists');
      return;
    }

    bldgData.id = this.state.nextId;
    this.setState({
      nextId: this.state.nextId + 1
    });

    let dataArr = this.state.data;

    dataArr.push(bldgData);
    dataArr.sort(function(a, b) {
      return a.code.localeCompare(b.code);
    });

    this.setState({
      data: dataArr,
      addBuildingText: 'Your building was added to the listing.'
    });
    console.log('building added');
  }

  removeBuilding(id) {
    let dataArr = this.state.data;

    for(let i = 0; i < dataArr.length; i++)
    {
      if(dataArr[i].id === id)
      {
        dataArr.splice(i, 1);
        break;
      }
    }

    this.setState({
      data: dataArr
    });
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate.bind(this)} />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                  selectedBuilding={this.state.selectedBuilding}
                  data={this.state.data} />
              <AddBuilding 
                  addBuilding={this.addBuilding.bind(this)}
                  addBuildingText={this.state.addBuildingText}
                  dataSize={this.state.data.length} />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
