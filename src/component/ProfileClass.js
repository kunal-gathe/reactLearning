 import React from "react";
 class ProfileClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            info : ""
        }
        console.log(this.props.name + "child - Constructor");
    }

    async componentDidMount(){
        
        let data = await fetch("https://api.github.com/users/kunal-gathe")
        let json = await data.json();
        this.setState({
            info : json
        })
        // console.log(this.props.name +  "child - componentDidMount");

    }

    componentDidUpdate(){
        // console.log(this.props.name +  "child - componentDidUpdate");
    }
    componentWillUnmount(){
        // console.log(this.props.name +  "child - componentWillUnmount");
    }

    render(){
        console.log(this.props.name +  "child - Render")
        const {avatar_url, name,location} = this.state.info
        return (
            <>
            <img src={avatar_url}/>
            <h1>{name}</h1>
            <h2>{location}</h2>
            </>
        )
    }
 }

 export default ProfileClassComponent;