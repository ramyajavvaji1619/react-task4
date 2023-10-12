import "./App.css";

import AppStore from './components/AppStore'
import Capitals from "./components/Capitals";
import  Gallery from './components/Gallery'
function App() {
  return (
    <div className="App">
    <AppStore/>
    <Capitals/>
    <Gallery/>
    </div>
  );
}

export default App;
