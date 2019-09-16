import React, {Component} from 'react';
import TopMenu from '../Components/TopMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlBar from '../Components/ControlBar';
import OnlineBar from '../Components/OnlineBar';
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

	}

  render() {
  	
	return(
	<div>
     <TopMenu />
     <Row>
      <Col sm="3" >
         <ControlBar />
     </Col>
     <Col sm="6" className="Content">
        <Form>
          <FormGroup>
          <Label for="exampleText"><h5>Post</h5></Label>
          <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
        <Card>
          <CardTitle className="Title">
          <a href="./Profile">
            <img className="Avata" src="data:image/jpeg;base64,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"/>
            <h5>Baby Shark</h5>
          </a>
          </CardTitle>
          <CardImg top width="100%" src="https://i.pinimg.com/originals/06/8f/f0/068ff0addbff125570ff4773715f53d6.jpg" alt="Card image cap" />
         <CardBody className="CardBody">
          <CardText>
            Baby shark do-do do do-do-do do
            Baby shark do-do do do-do-do do
            Baby shark do-do do do-do-do do
            Baby shark

            Mommy shark do-do do do-do-do do
            Mommy shark do-do do do-do-do do
            Mommy shark do-do do do-do-do do
            Mommy shark

            Daddy shark do-do do do-do-do do
            Daddy shark do-do do do-do-do do
            Daddy shark do-do do do-do-do do
            Daddy shark
          </CardText>
          <Button outline color="secondary" >Like</Button>{'  '}
          <Button outline color="secondary">Comment</Button>{'  '}
          <Button outline color="secondary">Share</Button>
        </CardBody>
      </Card>
     </Col>
     <Col sm="3" className="OnlineBar">
       <OnlineBar />
     </Col>
     </Row>
	</div>
	);
 }
}
export default Index;
