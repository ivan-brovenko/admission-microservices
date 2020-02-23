import React from 'react';
import './Header.scss'
import {connect} from "react-redux";
import RegistrationLink from "./RegistrationLink";
import LogInLink from "./LogInLink";

@connect(
    state => ({
        state
    }),
    dispatch => ({
        dispatch
    })
)
class Header extends React.Component {
    render() {
        return (
            <header>
                <label className="logo">STUD.UA</label>
                {
                    (!this.props.state.isRegistration) ? <RegistrationLink/> : ''

                }
                {
                    (!this.props.state.isRegistration) ? <LogInLink/> : ''
                }
                {
                    (!this.props.state.isMain) ? <a href="/">MAIN PAGE</a>: ''
                }
                <select>
                    <option value="/stud.ua-en">EN</option>
                    <option value="/stud.ua-ru">RU</option>
                    <option value="/stud.ua-ua">UA</option>
                </select>
            </header>
        );
    }
}

export default Header;