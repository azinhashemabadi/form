import Identity from "./component/Identity";
import Gender from "./component/Gender";
import Button from "./component/Button";
import Subject from "./component/Subject";
import Resume from "./component/Resume";
import Level from "./component/Level";
import About from "./component/About";
import "./App.css";
function App() {
  const items = ["English", "Maths", "Physics"];
  const levels = ["Beginer", "Intermediate", "Advance"];
  const handelSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="app">
      <head></head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="box">
          <h1 className="title">Form in React</h1>
          <Identity firstName="" lastName="" email="" contact="" />
          <Gender></Gender>
          <Subject items={items} onSelected={handelSelectItem} />
          <Resume />
          <Level levels={levels} onSelectedLevel={handelSelectItem} />
          <About />
          <Button onClick={() => console.log("clicked")} />
      </div>
    </div>
  );
}

export default App;
