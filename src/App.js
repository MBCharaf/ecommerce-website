import "./App.css";
import HomePage  from "./pages/homepage/homepage";
import {Route,Switch} from "react-router-dom";

const HatsPage =  () =>{
  return <div>
  <h1>HATS</h1>
  </div>;
};

function App() {
  return (
    <div >
     <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop/hats" component={HatsPage}/>
      </Switch> 
    </div>
  );
}

export default App;
