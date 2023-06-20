
// {} is a place where we will attributes to the tags 
// React.createElement - it basically creates an Object

/**
 * React.createElement (Object) => which becomes HTML(Browser understands)
 */
// Nested div div h1
// for siblings, we need to create array of children

const parent = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child"}, 
[React.createElement("h1",{}, "OI am an H1 tag"), 
React.createElement("h2",{}, "OI am an H2 tag")
]),

React.createElement("div", {id: "child2"}, 
[React.createElement("h1",{}, "OI am an H1 tag"), 
React.createElement("h2",{}, "OI am an H2 tag")
]),
]);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);