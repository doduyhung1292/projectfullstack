import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu,
   DropdownItem,
   TabContent,
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, Card, Button, 
    CardTitle, 
    CardText, Row, Col,
    Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Login extends Component {
  constructor(props) {
    super(props);
     this.toggle = this.toggle.bind(this);
    this.state = { activeIndex: 0, activeTab: '1' };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
   toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 350px;
                background: black;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              <h3>Login</h3>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <h3>Sign Up</h3>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="6">
         <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="Email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>
        <a>Loss Password?</a> <br />
        <Button>Login</Button>
      </Form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="Email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Gender</Label>
          <Input type="select" name="gender" id="gender">
            <option>Male</option>
            <option>Female</option>
            <option>Gay</option>
            <option>Les</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">Image profile</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Upload your photo profile
          </FormText>
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I agree with the Terms of Use
          </Label>
        </FormGroup>
        <Button>Sign Up</Button>
      </Form>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Login;