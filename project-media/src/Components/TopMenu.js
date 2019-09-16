import React, {Component} from 'react';
import './TopMenu.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
class TopMenu extends Component {
  render() {
    return (
      <div className="Container">   
          <React.Fragment >
            <MaterialIcon icon="dashboard" size='40' />
          </React.Fragment>
          <React.Fragment >
           <form className="search">
            <input type="search" name="search" placeholder="Search..."/>
           </form>
          </React.Fragment>
          <React.Fragment className="button">
            <button className="home"><MaterialIcon icon="home" size='35' /></button>
            <button><MaterialIcon icon="chat_bubble" size='35' /></button>
            <button><MaterialIcon icon="account_circle" size='35' /></button>
            <button><MaterialIcon icon="add_alert" size='35' /></button>
            <button><MaterialIcon icon="people_outline" size='35' /></button>
          </React.Fragment>
          <React.Fragment>
             <button className="setting" href="./Login"><MaterialIcon icon="brightness_5" size='35' /></button>
          </React.Fragment >
      </div>
    )
  };
 } 
 export default  TopMenu;