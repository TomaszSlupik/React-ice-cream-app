import logo from "./logo.svg";
import Line from "./components/line/Line";
import "./App.css";
import Describe from "./components/describe/Decribemain";
import { Navline } from "./components/line/linenav";
import { StyleDescribe } from "./components/describe/describe";
import { PageFoooter } from "./components/Footer/styled/PageFooter";
import Button from "./components/Button/Button";
import { Component } from "react";
import { Gallery } from "./components/Gallery/Gallery";

class App extends Component {
	constructor() {
		super();
		this.state = {
			isClicked: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState((state) => ({
			isClicked: !state.isClicked,
		}));
	}

	render() {
		return (
			<div className="App">
				<Navline>O nas</Navline>
				<Line />
				<h1>Smakołaki</h1>
				<Describe />

				{/* <Button onClick={this.onClick}>
					{this.state.isClicked ? "Wysłano" : "Wyślj"}
				</Button> */}

				<Gallery></Gallery>

				<Navline>Historia</Navline>
				<Line />

				<PageFoooter>React App</PageFoooter>
			</div>
		);
	}
}
export default App;
