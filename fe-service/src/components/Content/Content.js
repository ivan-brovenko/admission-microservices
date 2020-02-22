import React from 'react';
import './Content.scss';
import BackgroundImage from '../../images/backbround.jpg';
import Square1 from '../../images/square1.jpg';
import Square2 from '../../images/square2.jpg';
import Square3 from '../../images/square3.jpg';
import Square4 from '../../images/square4.jpg';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="mainImageSection">
                    <img src={BackgroundImage} alt="admission"/>
                    <div className="headline">
                        ADMISSION
                    </div>
                </div>
                <div className="tabs">
                    <div className="tab">
                        <div className="squareText">
                            SIGN UP
                        </div>
                        <img src={Square1}/></div>
                    <div className="tab">
                        <div className="squareText">
                           CHOOSE A DEPARTMENT
                        </div>
                        <img src={Square2}/></div>
                    <div className="tab">
                        <div className="squareText">
                            FILL THE FORM
                        </div>
                        <img src={Square3}/></div>
                    <div className="tab">
                        <div className="squareText">
                           WAIT FOR RESULTS
                        </div>
                        <img src={Square4}/></div>
                </div>
            </div>
        );
    }
}

export default Content;