let ele1 = React.createElement("h1", { id: "h1" }, "Hello, From React!");
let ele2 = React.createElement("h2", { className: "h2" }, "Hello, From React2!");

// {class:"h2"}/null - attributes

// rendering multiple elements
let div = React.createElement("div", null, [ele1, ele2]);

// let container = document.querySelector(".container");

// let root = ReactDOM.createRoot(container);
let root = ReactDOM.createRoot(document.querySelector(".container"));

root.render(div);
