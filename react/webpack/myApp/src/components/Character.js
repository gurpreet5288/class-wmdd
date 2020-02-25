import React,{Component } from "react";
import "./Character.css"


class Character extends Component{
    constructor(props){
        super(props);
        this.addHealth = this.addHealth.bind(this);
        this.addStamina = this.addStamina.bind(this);
        this.addGold = this.addGold.bind(this);
        this.state = {
            health : 150,
            stamina : 200,
            gold : 75
        }
    }
    addHealth(){
        this.setState(prevState => {
            return {
                health : prevState.health + 10
            }
        })
    }
    addStamina(){
        this.setState(prevState => {
            return {
                stamina : prevState.stamina + 5
            }
        })
    }


    addGold(){
        this.setState(prevState => {
            return {
                gold : prevState.gold + 3
            }
        })
    }
    render(){
        return (<div>
            <h2>{this.props.name}'s Bio:</h2>
             <p>Race : {this.props.race}</p>
             <p>
                Status : {this.props.status}
                <br/> 
                (With Health at : {this.state.health} , <br/> 
                and stamina at : {this.state.stamina} 
             </p>
             <p>Gold {this.state.gold}</p> 
             <p className={this.props.comment ? "visible" : "hidden"}>
                Comment {this.props.comment}</p> 

            <button onClick={this.addHealth}>Add 10 Health</button>
            <button onClick={this.addStamina}>Add 5 Stamina</button>
            <button onClick={this.addGold}>Add 3 Gold</button> 
            <hr/>
        </div>)
    }
}

export default Character;