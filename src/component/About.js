import { Outlet } from "react-router-dom"
import React from "react"
import Profile from "./Profile"
import ProfileClassComponent from "./ProfileClass"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent - Constructor");
    }

    componentDidMount(){
        // this.timer = setInterval(()=>{
        //     console.log("setInterval");
        // },1000)
        console.log("Parent - componentDidMount");
    }

    componentWillUnmount(){
         clearInterval(this.timer)
    }

 render(){
    console.log("Parent - render");
    return (
        <>
        <h1>About us</h1>
        {/* <ProfileClassComponent name='first'/> */}
        <Profile />
        </>
    )
 }
}
export default About