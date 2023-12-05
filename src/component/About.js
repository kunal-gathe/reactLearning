import { Outlet } from "react-router-dom"
import React from "react"
import Profile from "./Profile"
import ProfileClassComponent from "./ProfileClass"

class About extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // this.timer = setInterval(()=>{
        //     console.log("setInterval");
        // },1000)
    }

    componentWillUnmount(){
         clearInterval(this.timer)
    }

 render(){
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