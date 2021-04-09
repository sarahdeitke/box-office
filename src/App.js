import logo from './Images/logo.png';
import { Container, Row,Col } from 'reactstrap';
import StrangerThings from './Images/StrangerThings.jpeg';
import MoneyHeist from './Images/MoneyHeist.jpeg';
import Bridgerton from './Images/Bridgerton.jpeg';
import Avatar from './Images/Avatar.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Box office is a monthly subscription box service from Netfl*x bringing everything you love about your favorite shows into your home. Build your box below!
        </p>
      </header>

      <Container fluid className="App-main">
        <p>1. Select Show</p>
        <Row className="Selection-row">
          <Col><input type="image" className="Selection-box" src={StrangerThings} alt="Stranger Things"/></Col>
          <Col><input type="image" className="Selection-box" src={MoneyHeist} alt="Money Heist"/></Col>
          <Col><input type="image" className="Selection-box" src={Bridgerton} alt="Bridgerton"/></Col>
          <Col><input type="image" className="Selection-box" src={Avatar} alt="Avatar"/></Col>
        </Row>
        <p>2. Select Small Merch</p>
        <p>3. Select Big Merch</p>
        <p>4. Select Snack Sweet</p>
        <p>5. Select Snack Salty</p>
        <button>pre-order May</button>
      </Container>
    </div>
  );
}

export default App;
