import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="h-screen bg-black items-center justify-center">
      {/* Two ways to render card */}

      {/* render as a function */}
      {/* {Card(10,20)} */}
      {/* render as a component */}
      {/* <Card user='Bhavesh' age={21}/>
      <Card user='Harsh' age={21}/>
      <Card user='Dev' age={21}/>
      <Card user='Bhavu' age={21}/> */}
      {/* {<Card />} */}

      {/* <Cards cardName="Bhavesh" />
      <Cards cardName="Bhavu" /> */}
      {/* {Cards('Bhavesh')}
      {Cards('Bhavu')} */}

      <Button text="Click Me!" style="bg-red-500 hover:bg-red-600" />
      <Button text="Hover Me!" style="bg-green-500 hover:bg-green-600" />
      <Button text="Hold Me!" style="bg-yellow-500 hover:bg-yellow-600" />
    </div>
  );
}

export default App;
