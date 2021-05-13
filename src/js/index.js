//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

var counter = 0;
var seconds;
var run = true;
var stopWatch = null;

//declare function to set 'counter' with user provided starting number
const setCounter = number => {
	counter = number;
};

const setRun = () => {
	run = !run;
};

const setStopWatch = () => {};

const checkStopWatch = number => {
	if (counter == number) {
		run = false;
		alert("Your time was reached");
	}
};

var myTimer = () => {
	console.log(counter);
	if (run) {
		counter += 1;
		if (stopWatch) checkStopWatch();
	}
	seconds = "000000" + counter;
	seconds = seconds.slice(-6);
	console.log(seconds);

	ReactDOM.render(
		<Home
			run={run}
			setRun={setRun}
			setCounter={setCounter}
			num1={seconds.charAt(0)}
			num2={seconds.charAt(1)}
			num3={seconds.charAt(2)}
			num4={seconds.charAt(3)}
			num5={seconds.charAt(4)}
			num6={seconds.charAt(5)}
		/>,
		document.querySelector("#app")
	);
};

setInterval(myTimer, 1000);
