/* eslint-disable no-sequences */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import './style.css'
import DCproject from "./Media/MainDC.jpg"
import Gallery_img from "./Media/gallery_logo.png"
import Chess_img from './Media/Chess pic.jpg'
import catebzaLogo from "./Media/CatebzaLogo.png"
import {Carousel} from "3d-react-carousal"

const slides=[
    //When adding a project, also add it to the grid_project div below
<a href="https://thapza101.github.io/CatebzaTrading" style={{height:"200px"},{padding:"5%"}} target="_blank"><img src={catebzaLogo} style={{height:"80%"},{width:"50%"}}/></a>,
<a href="https://thapza101.github.io/gallery" target="_blank" ><img src={Gallery_img}/></a>,
<a href="https://thapza101.github.io/DCGame" style={{height:"200px"}} target="_blank"><img src={DCproject} style={{height:"80%"},{width:"50%"}}/></a>,
];
var details=[
    {Naam:"Queen's Gambit Chess Club",Type:"Website",linksTo:"https://thapza101.github.io/chessSite",nameOfLink:"Go to Queen's Gambit's site"},
    {Naam:"Gallery", Type:"Web-application", linksTo:"https://thapza101.github.io/gallery",nameOfLink:"Go to the Gallery site"}

]

class Projects extends Component{
    constructor(){
        super();
        this.state={
            name:"DC Quiz Game",
            type:"Web-application",
            link:"https://thapza101.github.io/DCGame",
            linkName:"Go to DC Quiz Game's Page"
        }
    }
    changeDetails=()=>{
        var i=0;
        this.setState({
            name:details[i].Naam,
            type:details[i].Type,
            link:details[i].linksTo,
            linkName:details[i].nameOfLink
        },()=>{
            i=i+1;
        })
    }

    render(){
        return(
            <div className='projectsDiv' id="ProID">
            <h1><span className="h1">My Projects</span></h1>
            <section className='projectSection'>
                <h2 className="projectSubHeading">Browse through some of the web-applications and websites created.<br /> Click on an icon to access an individual Project.</h2>
                <Carousel slides={slides} >
                
        </Carousel>
                <div className="grid_projects">
                    <a href="https://thapza101.github.io/CatebzaTrading" target="_blank"><img src={catebzaLogo}/></a>
                    <a href="https://thapza101.github.io/gallery" target="_blank" ><img src={Gallery_img}/></a>
                    
                    <a href="https://thapza101.github.io/DCGame" target="_blank"><img src={DCproject}/></a>
                </div>
            </section>
            </div>
        )
    }
}
export default Projects