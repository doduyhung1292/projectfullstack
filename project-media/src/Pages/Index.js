import React, {Component} from 'react';
import TopMenu from '../Components/TopMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlBar from '../Components/ControlBar';
import './Index.css';

import { ListGroup,  
	Col, Card, CardImg, 
	CardText, CardBody,
    CardTitle, 
    CardSubtitle, 
    Button, Row, 
    Form, FormGroup, Label, Input } from 'reactstrap';

class Index extends Component {
  constructor(){
	super();
	this.state={
		Useronline: [
        {name:"Nguyễn Văn Toàn"},
        {name:"Nguyễn Văn Toàn"},
        {name:"Nguyễn Văn Toàn"},
        {name:"Nguyễn Văn Toàn"},
        {name:"Nguyễn Văn Toàn"},
        {name:"Nguyễn Văn Toàn"}
		]
		

	}

}
  render() {
  	const {Useronline, Control}= this.state;
	return(
	<div>
     <TopMenu />
     <Row>
      <Col sm="3" className="BarLeft">
         <React.Fragment>
          <h4>Home</h4>
         </React.Fragment>
         <h6>Event</h6>
         <h6>Page</h6>
         <h6>Group</h6>
         <h6>Saved</h6>
         <h6>Gaming</h6>
         <h6>Memories</h6>
         <h6>Help & Support</h6>
         <h6>See more</h6>
         <br /> <br /> <br />
         <p className="Footer">This page created by Đốm <br />@16/9/2019</p>

     </Col>
     <Col sm="6" className="Content">
        <Form>
          <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
        <Card>
          <CardTitle><h5>Baby Shark</h5></CardTitle>
          <CardImg top width="100%" src="https://i.pinimg.com/originals/06/8f/f0/068ff0addbff125570ff4773715f53d6.jpg" alt="Card image cap" />
         <CardBody className="CardBody">
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button outline color="secondary" >Like</Button>{'  '}
          <Button outline color="secondary">Comment</Button>{'  '}
          <Button outline color="secondary">Share</Button>{' '}
        </CardBody>
      </Card>
     </Col>
     <Col sm="3" className="OnlineBar">
       <React.Fragment className="online-bar">
            <h5>Suggest</h5>
            <img src="#"/>
            <h5>Contacts</h5>
            <h6>Đốm</h6>
            <h6>Ngáo</h6>
            <h6>Mặt lợn</h6>
            <h6>Cáo</h6>
            <h6>Chồn</h6>
            <h6>Sư Tử</h6>
            <h6>Gà</h6>
            <h6>Mèo</h6>
            <h6>Chó</h6>
            <h6>Hí Hí</h6>
          </React.Fragment >
     </Col>
     </Row>
	</div>
	);
 }
}
export default Index;
