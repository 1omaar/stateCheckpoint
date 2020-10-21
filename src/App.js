import React, { Component } from 'react';
import Mein from './Images/dan.jpg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
export class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    fullName: 'Omar Tebessi',
    bio:"Diplomée d'une licence en génie mécanique de l'institut supérieur des études technologiques de rades",
    imgSrc:Mein,
    profession:'Future Développeur Full Stack JS',
    show:true,
    date:new Date(),
  };
  this.handleClick = this.handleClick.bind(this);
}
//toggle function
handleClick = () => this.setState(state => ({show:!state.show}));
//time function 
chrono() {
  this.setState({
    date: new Date()
  });
}
componentDidMount() {
  this.time = setInterval(() => this.chrono(),1000);
}
componentWillUnmount() {
  clearInterval(this.time);
}

  render() {
    
    return (
    <div>
      {this.state.show ?
      <div className='profil-block'>
        <div className='avatar-design'>
          <h2><span>Full Name:</span> {this.state.fullName}</h2>
          <img src={this.state.imgSrc} className='avatar-photo' alt="Omar's face"/>
        </div>
        <div className='avatar-info'>
          <h2 className='title-design'><span>Bio: </span>{this.state.bio}</h2>
          <h2 className='title-design'><span>Profession: </span> {this.state.profession} </h2>
          <Button variant="outline-dark" className='toggling' size="lg" onClick={() => this.handleClick()} >Toggle Me!</Button>
          </div>
      </div>
      :
        <div className='showOff'>
          <h2 className='title-design horloge'><span>Time: </span>{this.state.date.toLocaleTimeString()}</h2>
          <Button variant="outline-dark" className='toggling' size="lg" onClick={() => this.handleClick()}>Toggle Me!</Button>
        </div>}
    </div>
    
    )
  };
};


export default App

