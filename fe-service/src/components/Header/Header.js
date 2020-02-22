import React from 'react';
import './Header.scss'

class Header extends React.Component {
    render() {
        return (
            <header>
                <label className="logo">STUD.UA</label>
                <a>SIGN UP</a>
                <a>LOG IN</a>
                <select onchange="location=this.options[this.selectedIndex].value;">
                    <option value="/stud.ua-en">EN</option>
                    <option value="/stud.ua-ru">RU</option>
                    <option value="/stud.ua-ua">UA</option>
                </select>
            </header>
        );
    }
}

export default Header;