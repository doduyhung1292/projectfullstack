import React, {Component} from 'react';
import TopMenu from '../Components/TopMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ListGroup, 
	ListGroupItem, 
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
		],
		Control: [
         {function: "Event"},
         {function: "Saved"},
         {function: "Gaming"},
         {function: "Memories"},
         {function: "Help & Support"},
         {function: "See more"}
		]

	}

}
  render() {
  	const descriptionStyle = {
      display: 'inline-flex'
      };
  	const {Useronline, Control}= this.state;
	return(
	<div>
     <TopMenu />
     <Row>
      <Col sm="3">
         <React.Fragment style={descriptionStyle}>
           <h4>Home</h4>
           <a href="#">Create</a>
          </React.Fragment>
         <ListGroup >
          
          <ListGroupItem>{Control.function}</ListGroupItem>
        </ListGroup>
     </Col>
     <Col sm="6">
        <Form>
          <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
        <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button outline color="secondary" size="lg">Like</Button>{'  '}
          <Button outline color="secondary" size="lg">Comment</Button>{'  '}
          <Button outline color="secondary" size="lg">Share</Button>{' '}
        </CardBody>
      </Card>
     </Col>
     <Col sm="3">
       <React.Fragment className="online-bar">
            <h5>Suggest</h5>
            <img src="#"/>
            <h5>Contacts</h5>
            <h6>{Useronline.name}</h6>
          </React.Fragment >
     </Col>
     </Row>
	</div>
	);
 }
}
export default Index;
