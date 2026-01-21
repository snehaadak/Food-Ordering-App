const parent = React.createElement("h1",{id:parentElement},
    [React.createElement("h2",{id:parentElement},Child1),
    React.createElement("h2",{id:parentElement},Child2)  
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root2"))
root.render(parent)
