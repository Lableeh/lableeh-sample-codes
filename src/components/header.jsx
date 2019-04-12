import React, { Component } from 'react';
import register from '../images/register.png';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
               <img src={register} alt="register" className="register"/>
            </div>
           
        );

        
    }
}


export default Header;
export {Header};
