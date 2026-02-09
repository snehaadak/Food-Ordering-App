import React from "react";

class UserClass extends React.Component{

    constructor(props) {
            super(props);

            this.state = {
                userInfo : {
                    name : "Dummy Name",
                    location: "Default Location "
                },
                count : 0
            }      
        }


    async componentDidMount() {

            const data = await fetch ("https://api.github.com/users/snehaadak");
            const json = await data.json();

            this.setState ({
                userInfo : json
            })
        }

        
    render(){

        const {name, location} = this.state.userInfo

        return (
            <div className="p-5 w-80 mb-6 border border-blue-300 bg-blue-200 rounded-2xl shadow hover:shadow-gray-500">
            <h4 className="font-bold pb-3 font-serif" >This is {this.props.content}</h4>
            <h2 className="font-bold pb-1">{name}</h2>
            <h4>{location}</h4>
            <h4>GitHub: @snehaadak</h4>
            <h4 className="mb-3">State Variable:{this.state.count}</h4>
            <button className="border p-2 bg-gray-300 rounded-2xl hover:cursor-pointer" onClick={()=>{
                    //Updating a state variable inside a Class component
                    this.setState({
                        count: this.state.count +1
                    })
                }}>Count Increase</button>
        </div>
        )
    }
}

export default UserClass;