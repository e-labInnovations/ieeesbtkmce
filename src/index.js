import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import React from "react"
import ReactDOM from "react-dom"
import gsap, { Power1, ScrollTrigger } from 'gsap';


const person1 = new Person("Brad")
if (document.querySelector("#render-react-example-here")) {
  ReactDOM.render(<ExampleReactComponent />, document.querySelector("#render-react-example-here"))
}

const countersCounts = document.querySelectorAll(".counters-count");

gsap.from(countersCounts, {
  textContent: 0,
  duration: 4,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
  // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
});