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
  render() {
	return(
	<div>
     <TopMenu />
     <Row>
      <Col sm="3">
         <ListGroup>
        <ListGroupItem>K63 - Trường Đại học Bách khoa Hà Nội (HUST)</ListGroupItem>
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
       <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        </ListGroup>
     </Col>
     </Row>
	</div>
	);
 }
}
export default Index;
