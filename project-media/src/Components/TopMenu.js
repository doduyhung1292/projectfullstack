import React, {Component} from 'react';
import './TopMenu.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
class TopMenu extends Component {
  render() {
    return (
      <div className="Container">   
          <React.Fragment >
            <MaterialIcon icon="dashboard" size='35' />
          </React.Fragment>
          <React.Fragment >
           <form className="search">
            <input type="search" name="search" placeholder="Search..."/>
           </form>
          </React.Fragment>
          <React.Fragment className="button">
            <button className="home">Home</button>
            <button>Profile</button>
            <button>Mess</button>
            <button>Notice</button>
            <button>Friend</button>
          </React.Fragment>
          <React.Fragment>
             <button className="setting">Setting</button>
          </React.Fragment >
      </div>
    )
  };
 } 
 export default  TopMenu;