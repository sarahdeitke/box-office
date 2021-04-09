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

function App() {
  return (
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
          <Col><label><input type="radio" name="show" id="ST"/><img className="Selection-box" src={StrangerThings}/></label></Col>
          <Col><label><input type="radio" name="show" id="MH"/><img className="Selection-box" src={MoneyHeist}/></label></Col>
          <Col><label><input type="radio" name="show" id="Br"/><img className="Selection-box" src={Bridgerton}/></label></Col>
          <Col><label><input type="radio" name="show" id="Av"/><img className="Selection-box" src={Avatar}/></label></Col>
        </Row>
        <p>2. Select Branded Small Merch</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="smallM" id="so"/><img className="Selection-box" src={CrewSocks}/></label></Col>
          <Col><label><input type="radio" name="smallM" id="be"/><img className="Selection-box" src={Beanie}/></label></Col>
          <Col><label><input type="radio" name="smallM" id="st"/><img className="Selection-box" src={Stickers}/></label></Col>
          <Col><label><input type="radio" name="smallM" id="mu"/><img className="Selection-box" src={Mug}/></label></Col>
        </Row>
        <p>3. Select Branded Big Merch</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="bigM" id="sh"/><img className="Selection-box" src={Shirt}/></label></Col>
          <Col><label><input type="radio" name="bigM" id="hy"/><img className="Selection-box" src={Hydroflask}/></label></Col>
          <Col><label><input type="radio" name="bigM" id="pa"/><img className="Selection-box" src={Pants}/></label></Col>
          <Col><label><input type="radio" name="bigM" id="su"/><img className="Selection-box" src={Surprise}/></label></Col>
        </Row>
        <p>4. Select Snack Sweet</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="sweetS" id="mm"/><img className="Selection-box" src={MMs}/></label></Col>
          <Col><label><input type="radio" name="sweetS" id="spk"/><img className="Selection-box" src={SourPatchKids}/></label></Col>
          <Col><label><input type="radio" name="sweetS" id="re"/><img className="Selection-box" src={Reeses}/></label></Col>
          <Col><label><input type="radio" name="sweetS" id="tw"/><img className="Selection-box" src={Twizzlers}/></label></Col>
        </Row>
        <p>5. Select Snack Salty</p>
        <Row className="Selection-row">
          <Col><label><input type="radio" name="saltyS" id="po"/><img className="Selection-box" src={Popcorn}/></label></Col>
          <Col><label><input type="radio" name="saltyS" id="pr"/><img className="Selection-box" src={Pretzels}/></label></Col>
          <Col><label><input type="radio" name="saltyS" id="ch"/><img className="Selection-box" src={Chips}/></label></Col>
          <Col><label><input type="radio" name="saltyS" id="pe"/><img className="Selection-box" src={Peanuts}/></label></Col>
        </Row>
        <p><button className="Order-button">Pre-Order May</button></p>
      </Container>
    </div>
  );
}

export default App;
