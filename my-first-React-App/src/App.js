import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { robots } from "./robots";
import './App.css';

//State is the description of your app 
//simply an object
//Props simply things that come out of state 
//parent feeds state into a child component
// as it recives a state it becomes a property the child can never change it 
//the parents tells the chilld what the state is and child recives it as robots

// go back to origrnal way for create react app for state and make a class 



class App extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (props) => {
        this.setState({searchfield: props.target.value})

        {/*const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase);
        })
    console.log(filteredRobots);*/}
    }


    render(){
   
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
        <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/> {/*this.state.robots */}
        </div>
    );

    }
}
export default App;