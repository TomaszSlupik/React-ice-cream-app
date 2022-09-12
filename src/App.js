import logo from "./logo.svg";
import Line from "./components/line/Line";
import "./App.css";
import Describe from "./components/describe/Decribemain";
import {Navline} from './components/line/linenav'
import { StyleDescribe} from './components/describe/describe'

function App() {
	return (
		<div className="App">
			

      <Navline>O nas</Navline>
			<Line />
      <h1>Smakołaki</h1>
			<Describe/>		
		</div>
	);
}

export default App;
