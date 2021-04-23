import React, { Component } from 'react';
import axios from 'axios';
import logo from './Images/logo.png';
import { Container, Row,Col } from 'reactstrap';
import TagManager from 'react-gtm-module';
import StTop1 from './Images/st_top_1.jpeg';
import StTop2 from './Images/st_top_2.png';
import StTop3 from './Images/st_top_3.png';
import StTop4 from './Images/st_top_4.jpeg';
import StMug1 from './Images/st_mug_1.png';
import StMug2 from './Images/st_mug_2.png';
import StMug3 from './Images/st_mug_3.png';
import StMug4 from './Images/st_mug_4.png';
import StMisc1 from './Images/st_misc_1.png';
import StMisc2 from './Images/st_misc_2.png';
import StMisc3 from './Images/st_misc_3.png';
import StMisc4 from './Images/st_misc_4.png';

import './App.css';

const tagManagerArgs = {
  gtmId: 'GTM-K4P9DMN'
}

TagManager.initialize(tagManagerArgs)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stTop1: Boolean(false),
      stTop2: Boolean(false),
      stTop3: Boolean(false),
      stTop4: Boolean(false),
      stMug1: Boolean(false),
      stMug2: Boolean(false),
      stMug3: Boolean(false),
      stMug4: Boolean(false),
      stMisc1: Boolean(false),
      stMisc2: Boolean(false),
      stMisc3: Boolean(false),
      stMisc4: Boolean(false),
      name: '',
    };
  }

  handleOptionChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  handleNameChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  
    axios.post('https://sheet.best/api/sheets/ddafecbb-a2be-4dd9-a201-31f3ec160f8d', this.state)
    .then(response => {
      console.log(response);
    })

    alert("Thank your for your preorder!");
  }

  render() {
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You've entered the Stranger Things Limited Edition Netflix Merchandise Shop. Season 4 is coming out in May. Preorder your limited edition merch now.
        </p>
      </header>

      <Container fluid className="App-main">
        <p>Tops</p>
        <Row className="Selection-row">
          <Col><label><input type="checkbox" name="stTop1" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop1}/></label></Col>
          <Col><label><input type="checkbox" name="stTop2" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop2}/></label></Col>
          <Col><label><input type="checkbox" name="stTop3" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop3}/></label></Col>
          <Col><label><input type="checkbox" name="stTop4" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop4}/></label></Col>
        </Row>
        <p>Mugs</p>
        <Row className="Selection-row">
          <Col><label><input type="checkbox" name="stMug1" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug1}/></label></Col>
          <Col><label><input type="checkbox" name="stMug2" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug2}/></label></Col>
          <Col><label><input type="checkbox" name="stMug3" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug3}/></label></Col>
          <Col><label><input type="checkbox" name="stMug4" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug4}/></label></Col>
        </Row>
        <p>Misc.</p>
        <Row className="Selection-row">
          <Col><label><input type="checkbox" name="stMisc1" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc1}/></label></Col>
          <Col><label><input type="checkbox" name="stMisc2" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc2}/></label></Col>
          <Col><label><input type="checkbox" name="stMisc3" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc3}/></label></Col>
          <Col><label><input type="checkbox" name="stMisc4" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc4}/></label></Col>
        </Row>
        <p>Name</p>
        <Row className="Selection-row">
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
        </Row>
        <p><button className="Order-button" onClick={this.submitHandler}>Pre-Order May</button></p>
      </Container>
    </div>
  );
}
}

export default App;
