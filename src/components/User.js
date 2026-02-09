import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-5 w-80 mb-6 border border-blue-300 bg-blue-200 rounded-2xl shadow hover:shadow-gray-500">
            <h4 className="font-bold pb-3 font-serif">This is {props.content}</h4>
            <h2 className="font-bold pb-1">Sneha Adak</h2>
            <h4>Pune, Mahrashtra</h4>
            <h4>GitHub: @snehaadak</h4>
            <h4 className="mb-3">State Variable: {count}</h4>
            <button className="border p-2 bg-gray-300 rounded-2xl hover:cursor-pointer" onClick={()=> {
                setCount(count + 1)
            }}>Count Increase</button>
        </div>
    );
};

export default User;