import { useState } from "react"

const User = (props) => {

    const [count, setcount] = useState(0)

    return (
        <div className="userCard">
            <h2>Functional Component</h2>
            <h3>Name: {props.name}</h3>
            <h4>Location: Pune</h4>
            <h4>Contact: <a href="https://github.com/snehaadak">Sneha@github</a></h4>
            <h3>Count: {count}</h3>
            <button onClick={()=>
                setcount(count+1)
                    }>counter</button>
        </div>
    )
}

export default User