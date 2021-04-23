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
          You've entered the Stranger Things Limited Edition Netflix Merchandise Shop. Season 4 is coming out in May. Preorder your limited edition merch now.
        </p>
      </header>

      <Container fluid className="App-main">
        <p>Tops</p>
        <Row className="Selection-row">
          <Col><label><input type="checkbox" name="show" value="ST" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop1}/></label></Col>
          <Col><label><input type="checkbox" name="show" value="MH" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop2}/></label></Col>
          <Col><label><input type="checkbox" name="show" value="Br" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop3}/></label></Col>
          <Col><label><input type="checkbox" name="show" value="Av" onChange={this.handleOptionChange}/><img className="Selection-box" src={StTop4}/></label></Col>
        </Row>
        <p>Mugs</p>
        <Row className="Selection-row">
          <Col><label><input type="checkbox" name="smallM" value="so" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug1}/></label></Col>
          <Col><label><input type="checkbox" name="smallM" value="be" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug2}/></label></Col>
          <Col><label><input type="checkbox" name="smallM" value="st" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug3}/></label></Col>
          <Col><label><input type="checkbox" name="smallM" value="mu" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMug4}/></label></Col>
        </Row>
        <p>Misc.</p>
        <Row className="Selection-row">
          <Col><label><input type="checkbox" name="bigM" value="sh" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc1}/></label></Col>
          <Col><label><input type="checkbox" name="bigM" value="hy" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc2}/></label></Col>
          <Col><label><input type="checkbox" name="bigM" value="pa" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc3}/></label></Col>
          <Col><label><input type="checkbox" name="bigM" value="su" onChange={this.handleOptionChange}/><img className="Selection-box" src={StMisc4}/></label></Col>
        </Row>
        {/* <p>4. Select Snack Sweet</p>
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
        </Row> */}
        <p>Name</p>
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
