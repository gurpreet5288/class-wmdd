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
        return (<div></div>)
    }
}

export default Character;