import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
          
      ));
    }

}
export default App;
