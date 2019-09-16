import React, {Component} from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import './ControlBar.css';

class ControlBar extends Component {
	render() {
	return(
      <div className="BarLeft">
        <React.Fragment>
          <h4>Home</h4>
         </React.Fragment>
         <h6><MaterialIcon icon="event" size='30' /> Event</h6>
         <h6><MaterialIcon icon="work" size='30' /> Page</h6>
         <h6><MaterialIcon icon="recent_actors" size='30' /> Group</h6>
         <h6><MaterialIcon icon="book" size='35' /> Saved</h6>
         <h6><MaterialIcon icon="live_tv" size='30' /> Watch</h6>
         <h6><MaterialIcon icon="access_alarms" size='30' /> Memories</h6>
         <h6><MaterialIcon icon="live_help" size='30' /> Help & Support</h6>
         <h6><MaterialIcon icon="brightness_5" size='30' />Setting & Privacy</h6>
         <h5>See more <MaterialIcon icon="keyboard_arrow_down" size='25' /></h5>
         <br /> <br /> <br />
         <p className="Footer">This page created by Đốm <br />@16/9/2019</p>
    </div>
   )}
}
export default ControlBar;