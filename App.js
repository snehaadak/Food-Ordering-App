const parent = React.createElement("div",{id:parentElement},
    React.createElement("div",{id:chilElment},[
        React.createElement("h2",{},Child1),
        React.createElement("h2",{},Child2)  
    ]
))

const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(parent)
