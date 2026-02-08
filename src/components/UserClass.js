import React from "react"


    class UserClass extends React.Component{

        constructor(props){
            super(props);

            this.state = {
                count: 0,
            }

            console.log("Child Constructor")
        }

        render(){
            console.log("Child Render")
            return (
                <div className="userCard">
                    <h2>Class Based Component</h2>
                    <h3>Name: {this.props.name}</h3>
                    <h4>Location: Pune</h4>
                    <h4>Contact: <a href="https://github.com/snehaadak">Sneha@github</a></h4>
                    <h3>Count: {this.state.count}</h3>
                    <button onClick={()=>
                        this.setState({
                            count: this.state.count + 1})
                            }>counter</button>
                </div>
            )
        }
    }

    export default UserClass