import React, { Component } from 'react';
import axios from 'axios';
import logo from './Images/logo.png';
import { Container, Row,Col } from 'reactstrap';
import TagManager from 'react-gtm-module';
import StrangerThings from './Images/StrangerThings.jpeg';
import MoneyHeist from './Images/MoneyHeist.jpeg';
import Bridgerton from './Images/Bridgerton.jpeg';
import Avatar from './Images/Avatar.jpeg';
import CrewSocks from './Images/CrewSocks.webp';
import Beanie from './Images/Beanie.jpeg';
import Stickers from './Images/Stickers.jpg';
import Mug from './Images/Mug.jpeg';
import Pants from './Images/Pants.jpg';
import Shirt from './Images/Shirt.jpeg';
import Hydroflask from './Images/Hydroflask.jpeg';
import Surprise from './Images/Surprise.jpeg';
import MMs from './Images/M&Ms.jpg';
import SourPatchKids from './Images/SourPatchKids.jpg';
import Twizzlers from './Images/Twizzlers.png';
import Reeses from './Images/Reeses.jpeg';
import Popcorn from './Images/Popcorn.webp';
import Peanuts from './Images/Peanuts.jpg';
import Chips from './Images/Chips.jpg';
import Pretzels from './Images/Pretzels.jpeg';
import './App.css';

const tagManagerArgs = {
  gtmId: 'GTM-K4P9DMN'
}

TagManager.initialize(tagManagerArgs)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      show: '',
      bigM: '',
      smallM: '',
      sweetS: '',
      saltyS: ''
    };
  }

  handleOptionChange = e => {
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
          Box Office is a monthly subscription box service from Netfl*x bringing everything you love about your favorite shows into your home. Build your box below!
        </p>
      </header>

      <Container fluid className="App-main">
        <p>1. Select May Show</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="show" value="ST" onChange={this.handleOptionChange}/><img className="Selection-box" src={StrangerThings}/></label></Col>
          <Col><label><input type="radio" name="show" value="MH" onChange={this.handleOptionChange}/><img className="Selection-box" src={MoneyHeist}/></label></Col>
          <Col><label><input type="radio" name="show" value="Br" onChange={this.handleOptionChange}/><img className="Selection-box" src={Bridgerton}/></label></Col>
          <Col><label><input type="radio" name="show" value="Av" onChange={this.handleOptionChange}/><img className="Selection-box" src={Avatar}/></label></Col>
        </Row>
        <p>2. Select Branded Small Merch</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="smallM" value="so" onChange={this.handleOptionChange}/><img className="Selection-box" src={CrewSocks}/></label></Col>
          <Col><label><input type="radio" name="smallM" value="be" onChange={this.handleOptionChange}/><img className="Selection-box" src={Beanie}/></label></Col>
          <Col><label><input type="radio" name="smallM" value="st" onChange={this.handleOptionChange}/><img className="Selection-box" src={Stickers}/></label></Col>
          <Col><label><input type="radio" name="smallM" value="mu" onChange={this.handleOptionChange}/><img className="Selection-box" src={Mug}/></label></Col>
        </Row>
        <p>3. Select Branded Big Merch</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="bigM" value="sh" onChange={this.handleOptionChange}/><img className="Selection-box" src={Shirt}/></label></Col>
          <Col><label><input type="radio" name="bigM" value="hy" onChange={this.handleOptionChange}/><img className="Selection-box" src={Hydroflask}/></label></Col>
          <Col><label><input type="radio" name="bigM" value="pa" onChange={this.handleOptionChange}/><img className="Selection-box" src={Pants}/></label></Col>
          <Col><label><input type="radio" name="bigM" value="su" onChange={this.handleOptionChange}/><img className="Selection-box" src={Surprise}/></label></Col>
        </Row>
        <p>4. Select Snack Sweet</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="sweetS" value="mm" onChange={this.handleOptionChange}/><img className="Selection-box" src={MMs}/></label></Col>
          <Col><label><input type="radio" name="sweetS" value="spk" onChange={this.handleOptionChange}/><img className="Selection-box" src={SourPatchKids}/></label></Col>
          <Col><label><input type="radio" name="sweetS" value="re" onChange={this.handleOptionChange}/><img className="Selection-box" src={Reeses}/></label></Col>
          <Col><label><input type="radio" name="sweetS" value="tw" onChange={this.handleOptionChange}/><img className="Selection-box" src={Twizzlers}/></label></Col>
        </Row>
        <p>5. Select Snack Salty</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="saltyS" value="po" onChange={this.handleOptionChange}/><img className="Selection-box" src={Popcorn}/></label></Col>
          <Col><label><input type="radio" name="saltyS" value="pr" onChange={this.handleOptionChange}/><img className="Selection-box" src={Pretzels}/></label></Col>
          <Col><label><input type="radio" name="saltyS" value="ch" onChange={this.handleOptionChange}/><img className="Selection-box" src={Chips}/></label></Col>
          <Col><label><input type="radio" name="saltyS" value="pe" onChange={this.handleOptionChange}/><img className="Selection-box" src={Peanuts}/></label></Col>
        </Row>
        <p>6. Name</p>
        <Row className="Selection-row">
          <input type="text" name="name" value={this.state.name} onChange={this.handleOptionChange}/>
        </Row>
        <p><button className="Order-button" onClick={this.submitHandler}>Pre-Order May</button></p>
      </Container>
    </div>
  );
}
}

export default App;
