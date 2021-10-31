import React from 'react';
import data from "../data.json";
import "./Playerdetail.css";

const backgroundImg = {
    backgroundImage:"url(/images/bg2.png)", 
}

class Playerdetail extends React.Component {
    playerInformation;

    constructor(props) {
        super(props)
        let selectedPlayerId = this.props.match.params.playerId;
        this.playerInformation = data.find((player) => player.id === parseInt(selectedPlayerId));
    }

    lbsToKg = (playerWeight) => {
        let w1 = parseInt(playerWeight);
        return Math.round(w1*0.49);
    }

    render() {
        if (this.playerInformation) {
            return (
                <>
                    <div className="personalinfo-wrapper" style={backgroundImg}>
                        <div className="header">
                            <div className="back-btn">
                                    <a href={"/"}><i className="fas fa-arrow-left"></i> Home</a> 
                                    <a href="#"><i className="fas fa-question"></i> Help </a>
                            </div>
                            <div className="playername">
                                <p>{this.playerInformation.name}</p>
                            </div>
                            
                        </div>

                        <div className="profile-img-wrapper">
                            <div className="profile-img">
                                <img src={this.playerInformation.image} alt="image"/>
                            </div>
                        </div>

                        <div className="details">
                            <div className="details-header">
                                <p>Overall {this.playerInformation.overall}</p>
                                <p> Potential 91</p>
                            </div>
                            <div className="personalInfo">
                                <p>Age <span>{this.playerInformation.age}</span></p>
                                <p>Nationality <span>{this.playerInformation.nationality}</span></p>
                                <p>Club <span>{this.playerInformation.club}</span></p>
                                <p>Value <span>{this.playerInformation.value}</span></p>
                                <p>Wage <span>{this.playerInformation.wage}</span></p>
                                <p>Preferred Foot <span>{this.playerInformation.preferredFoot}</span></p>
                                <p>Work Rate (Attack - Defense) <span>{this.playerInformation.workRate}</span></p>
                                <p>Position <span>{this.playerInformation.position}</span></p>
                                <p>Jersey Number <span>{this.playerInformation.jerseyNumber}</span></p>
                                <p>Joined <span>{this.playerInformation.joined}</span></p>
                                <p>Contract Valid until <span>{this.playerInformation.contractValidUntil}</span></p>
                                <p>Height <span>{this.playerInformation.height}</span></p>
                                <p>Weight <span>{this.playerInformation.weight} - {this.lbsToKg(this.playerInformation.weight)}kg</span></p> 
                                <p>Crossing <span>{this.playerInformation.crossing}</span></p>
                                <p>Finishing <span>{this.playerInformation.finishing}</span></p>
                                <p>Heading Accuracy <span>{this.playerInformation.headingAccuracy}</span></p>
                                <p>Short Passing <span>{this.playerInformation.shortPassing}</span></p>
                                <p>Volleys <span>{this.playerInformation.volleys}</span></p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default Playerdetail;