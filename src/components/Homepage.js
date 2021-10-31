import React from 'react';
import { Component } from 'react';
import data from "../data.json";
import "./Homepage.css";

class  Homepage extends Component  {
    
    homePageBackground = {
        backgroundImage:"url(/images/bg.png)",
    }
    
    constructor(props) {
            super(props);
            this.state = {filterData:null , searchQuery:""};
    }

   findPlayer = () => {
            const searchQuery = this.state.searchQuery;
            const pattern = new RegExp(searchQuery,'img');
            const  filterData =(searchQuery && searchQuery.length) && data.filter((info)=>{
                if(info.name.match(pattern)){
                    return true;
                }
                else if(info.nationality.match(pattern)){
                    return true;
                }
                else if(info.club.match(pattern)){
                    return true;
                }
                else if(info.preferredFoot.match(pattern)){
                    return true;
                }
            })
            this.setState({filterData});
    }

    updateInputValue = (event) =>{
            this.setState({searchQuery: event.target.value });
    }

    render (){
        return (
            
            <div className="input-wrapper" style={this.homePageBackground}>
                <div className="input-container">
                    <img src = "/images/fifa21.png" alt="Fifa-2021"/>
                    <div className="input-box">
                        <input type="text"  value={this.state.searchQuery} placeholder="Search player" id="query" onChange={this.updateInputValue} onKeyPress={this.findPlayer}/>
                        <button className="search-btn" onClick={this.findPlayer}><i className="fas fa-search"></i>Search</button>
                        <div className="auto-complete">
                            {
                                this.state.filterData && this.state.filterData.length && this.state.filterData.map((element)=> {
                                    return (
                                        <a key={element.id} href={`/player/${element.id}`} >{element.name} </a>
                                    )
                                }) 
                           }
                        </div>
                    </div>
                </div>
            </div>
            
        )



    }
}

export default Homepage;