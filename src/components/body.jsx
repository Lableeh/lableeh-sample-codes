import React, { Component } from 'react';
import play_btn from '../images/play_btn.png';
import '../css/body.css';
import showInput from '../util/script.js';

class Body extends Component{
    constructor(props){
        super(props)
            this.state = {
                name: '',
                age: '',
                gender: ''
        }
    } 

    handleSubmit = (event) =>{
        event.preventDefault()
        // const data = this.state
        // console.log("Final data is",data)
        let name = this.state
        let age = this.state
        let gender = this.state
        console.log(event)
    }

    handleInputChange = (event) =>{
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

render(){
    const {name} = this.state
    const {age} = this.state
    const {gender} = this.state
    return(
        <div className='body'>
        <div className="wrapper">
        <p className="intro">A manic and impulsive criminal from Zaun, Jinx
			lives to wreak havoc without care for the consequences. With an
			arsenal of deadly weapons, she unleashes the loudest blasts and
			brightest explosions to leave a trail of mayhem and panic in her
			wake. Jinx despises boredom, and gleefully brings her own chaotic
			brand of pandemonium wherever she goes.No one knows for sure exactly
			where Jinx came from, but many urban legends and folktales have
			sprung up around her. Some have her as a young gang member who fell
			in with the wrong crowd and was either traumatized by one too many
			killings, suffered too much at the hands of an enemy, or was simply
			driven insane by sump fumes.</p>

        <div className='column'>
        <form>
            <table>
                <tr>
                <td align="right">Enter Name:</td>
                <td align="left"><input type="text" name="name" id="name" onChange={this.handleInputChange}/></td>
                </tr>

                <tr>
                    <td align="right">Enter Age: </td>
                    <td align="left"><input type="text" name="age" id="age" onChange={this.handleInputChange}/></td>
                </tr>

                <tr>
                    <td align="right">Gender:</td>
                    <td><input type="radio" name="gender" id="gender"
                    value="female"  onChange={this.handleInputChange} />Female<br/>
                    <input type="radio" name="gender" id="gender" value="male"  onChange={this.handleInputChange}/>Male<br/>
                    </td>
                </tr>
            </table> 
            {/* <p><button>Submit</button></p> */}
            {/* <input type="image" src={play_btn} alt="play_btn" class="btn" width="30%" height="20%" value="Submit"/> */}
            <button type="button" onClick={this.handleSubmit}>Add</button>
            </form>          
        </div>
        
        <div className="column">
        <table>
            <tr>
                <td>- - - - - - - - - YOUR INFORMATION - - - - - - - - -</td>
            </tr>

            <tr>
                <td>Name: <span id="Name"></span></td>
        
            </tr>

            <tr>
                <td>Age:<span id="Age"></span></td>
            </tr>

            <tr>
                <td>Gender: <span id="Gender"></span></td>
            </tr>
        </table>
        

        </div>
    </div>
</div>
    );
}
}

export default Body;