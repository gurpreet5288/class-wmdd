import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from "./components/Character"

const charArray = [
  {
    name: "Mark",
    race : "human",
    status : "Full-Health",
    comment : ""
  },
  {
    name: "Jack",
    race : "Demon",
    status : "Enraged",
    comment : "I'm so happy!!!"
  },
  {
    name: "Maria",
    race : "Fairy",
    status : "Full-health",
    comment : ""
  }
];
class App extends Component{

    listComp(){
      return charArray.map((item,index) => (
          <Character
            key={index}
            name = {item.name}
            race = {item.race}
            status = {item.status}
            comment = {item.comment}
          />
      ));
    }
    render(){
      return (
        <div className="App">
            <header className="App-header">{this.listComp()}</header>
        </div>
      )
    }
}
export default App;
