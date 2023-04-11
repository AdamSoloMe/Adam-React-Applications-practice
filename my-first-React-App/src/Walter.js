import React,{ Component } from "react";
import './Walter.css'



class Walter extends Component{
    render(){
        return(
            <div className="f1 tc">
                <h1>Walter</h1>
                <img src="http://www.savewalterwhite.com/img/walter_1.jpg" width="600" height="600" alt="walterMan"></img>
                <br></br>
                
                <button type="button"onClick={() =>{window.open('https://www.youtube.com/watch?v=q1I80s6Oohk','_blank','resizable=yes>click Me')}}>Click Me</button>
                
            </div>
        );
    }


   
}
export default Walter;