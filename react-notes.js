/* **************************************************************************************************
Course Title: React Front to back 2022
Author: Traversy Media
Description: for anybody, whether your just learning or already know it and want to build projects
**************************************************************************************************
/*
make sure you know JS (es6+) topics:
let vs var vs const, DOM, objects, this, binding this, arrow functions and this, high order array methods, obj destructuring, spread operator, classes, inheritance, modules, named and default exports, see other es6 topics in js-notes, async programming and Fetch API, NPM

********************************************************************* 
React: 
     JS library for building user interfaces, "reacts to state change, and updates the DOM"
********************************************************************** 
 just a VIEW library because it only takes care of building user interfaces (rendering view) and making sure view is in sync with state VS. Angular which is complete Framework(own router, etc).
 
 React gives us a way to build websites & UIs with organized and reusable components

//********************************************************* 
/*   Setting up Development Environment
//********************************************************* 
     node.js
     using VsCode: lightweight and cross platform editor
     installed postman api at postman.com
     installed React developer tools on Chrome Web store    
     using github for version control
     installed es7+ React/redux/react-native snippets by dsznajder
     installed bracket pair colorizer by coenraads
     installed javascript es6 code snippets by charalampos karypidis, uses for clg snippet
     installed vscode-icons by vscode icons team

*///********************************************************* 
     
//********************************************************* 
/*   Our default application contains: 
     node_modules: contains all 3rd party libraries as well as React itself
     public: contains public static assets of our app, like images
          index.html: contains div with id=”root”, container for our single page application
     package.json: contains dependencies and scripts
     src folder: contains all of our source files, components and js
          index.js: entry point to implement our single page application and other dependencies, loads app.js
          App.js: app that gets loaded into index.js, single component that embeds all other components
          *///********************************************************* 
          
//********************************************************* */
//                  Creating First React App
//********************************************************* */
//create-react-app: sets up your development environment for experience and to optimize app for production
npx create-react-app name-of-app --use-npm // npx is a package runner tool that comes with npm 5.2+, last argument enables use of npm instead of yarn
cd name-of-app
npm start 
//********************************************************* 
         
//********************************************************* */
//                       common code
//********************************************************* */
import React from 'react'; React.createElement();// creates React element
import ReactDOM from 'react-dom'; ReactDOM.render();//allows us to interact with dom
<React.StrictMode></React.StrictMode> // found in index.js, allows React to perform additional error checks, wraps <App/> component
React.Fragment, <></>  // JSX expressions must be wrapped in one element, you can use empty fragment to wrap elements for React.fragment if you do not want to use Div
import PropTypes from 'prop-types';// propTypes

/*                  BASIC DEFINITIONS

Components: reusable pieces of UI that can be used to build complex Uis,  <App/> is root component
state object : holds component data for class component
render() method: responsible for describing what UI should look like, returns React element for class component
react element: plain JS object in memory that maps to DOM element
virtual DOM: lightweight version of DOM in memory that is represented by React elements, whenever a component in virtual DOM is updated,  children are traversed to check for updates, then finally the components that were modified are updated in DOM, virtual DOM is cheaper way of manipulating DOM instead of working with the DOM API in browser directly,
Props: (properties) plain JS object every React Component has that is initialized to attributes we set besides key,

*///********************************************************* 
// TO EMBED ANOTHER COMPONENT INSIDE ANOTHER COMPONENT: use JSX tag
<ComponentName />

//********************************************************* */
//                       JSX
//********************************************************* */
// JSX expressions: (javascript xml) markup that consists of HTML and JS, is a react element so can be treated just like JS objects (so can be passed/returned from function, value of variable or constant) , gets passed through BABEL before rendering in browser and maps to ReactElement.  
     // simple explanation is that it is syntactic sugar that allows html to be put into js,
React.Fragment, <></>  // whenever returning JSX expressions, they must be wrapped in one element, you can use empty fragment to wrap elements for React.fragment if you do not want to use Div
className // JSX attribute names are  a little different than HTML attribute names,
{} // In JSX, you can insert any Js expression iside these curly braces
// correct syntax is to wrap jsx in ()

// CONDITIONALLY RENDERING in JSX: 
// One solution is to use helper method or variable to return jsx expression
// other solutions:
{condition && jsx element } // jsx element gets displayed if condition evaluates to true
{condition ? jsx element if condition true : jsx element if condition false}

// DYNAMICALLY RENDERING LISTS:
<ul>{this.state.tags.map((tag) => (<li key={tag.id}> {tag}</li>))}</ul>
// Implement dynamically via JSX expression with map method call on array,
// Each child has to have unique key prop so the list element has to have key attribute with unique value

//******************************* */
// STYLING
//************ ********************/
// popular css style component libraries: style components library, material UI, Chakra UI,
// STYLED COMPONENT
function Card({children}) {
     return (
       <div className="card">
         {children}
       </div>)}
//then in any other component import card and implement like this:
<Card>any text or elements here</Card>

// INLINE CONDITIONAL style
function Card({children, reverse}) {
return(
     <div className="card" style= {{
          backgroundColor: reverse ? "rgba(0,0,0,0.4" : "#fff",
          color: reverse ? "#fff" : "#000",
        }}>
          {children}
     </div>
)}

// CONDITIONAL CLASS
<Card reverse={true}></Card>
function Card({children, reverse}) {
     return (
          <div className={`card ${reverse && "reverse" }`}>
            {children}
          </div>
        )}
// ICONS
npm i react-icons //new package that includes materialize, fontawsome, maybe bootstrap icons
import {FaTimes} from 'react-icons/fa'// x icon

// PROPS VS STATE
// Props are data we pass to component via attributes and component state is private data that is local to that Component, Props are read-only
// to access props: you can destructure props in the parameter of the functional component by:
componentName = (props) =>{
     //access by calling props.propName
}
componentName = ({propName1, propName2}) =>{
     //access by calling propName1
}
// DEFAULT PROPS: 
// defaults props object contains props that have default values so you do not need to pass down from parent unless you want to specify different values, that way we can reduce the amount of props passed down from parent component resulting in cleaner and less noisy code
ListGroup.defaultProps = {
     textProperty: "name",
     valueProperty: "_id",
};

// Children: prop used to pass something in between opening and closing tags, ie you have dialog box component with value in between tags
// pass object with multiple properties as prop rather than passing individual properties for cleaner code

// TYPE CHECKING WITH PROPTYPES:
// Proptypes: adds type checking validation and quick doc lookup for props by simply looking at proptypes
// not really that important, if we are needing type checking we can use Typescript
// Import prop-types module
import PropTypes from 'prop-types';
Pagination.propTypes = {
     itemsCount: PropTypes.number.isRequired,
     pageSize: PropTypes.number.isRequired,
     currentPage: PropTypes.number.isRequired,
     onPageChange: PropTypes.func.isRequired
}
//************************* */
// STATE
//************************* */
// component level state and app level/ global state
// component level state: data associated with that one specific component

// useState Hook
// use useState hook to modify component level state
// argument given in useState function initializes data to 7, 
// useState function returns array that can be destructured
// reference variable, rating, is assigned to state
// function to update state, setRating, can be used to update state
const [rating, setRating] = useState(7);
//if you want to modify rating somewhere else in code
setRating(10);
//if you want to modify rating somewhere else in code, but also need access to previous value
setRating((prev) =>  prev +1 )

// App level/global state: data that will be used in multiple components,should be in root component
const [feedback, setFeedback] = useState(FeedbackData)
//pass via props
function App() {
<FeedbackList feedback={feedback} />
}
function FeedbackList({feedback}) {
{feedback.map((item) => ( 
<FeedbackItem key= {item.id} item= {item}/>
))}
}
//********************************************************* */
//                       COMPONENTS
//********************************************************* */
// Components can either be classes or functions. classes are old-school.  Modern react applications use functional compents and hooks to accomplish state.
// TO EMBED ANOTHER COMPONENT INSIDE ANOTHER COMPONENT: use JSX tag
<ComponentName />
// set keyword attributes, and custom attributes as well, if you list attribute without value it is set to default value true

//************************* */
// EVENTS && PROP DRILLING
//************************* */
// In JSX we pass events in attributes like in vanilla JS, however the event name is camelCase and when setting value we pass the function reference instead of function call

// 2. USE ARROW FUNCTION defined in class (preferred and puts method on the object instead of prototype	
//start at app level component where global state is, and define function with intended functionality
const deleteFeedback = (id) => {
     if (window.confirm('Are you sure you want to delete?')) {
       setFeedback(feedback.filter((item) => item.id !== id))}}
//pass function reference via prop
<FeedbackList handleDelete={deleteFeedback} />
//keep passing function reference via prop to get to very end component, where function reference is called with argument, this argument is passed to original function and called from app component
function FeedbackList({feedback, handleDelete}){
<FeedbackItem handleDelete={handleDelete}/>
}
function FeedbackItem({item, handleDelete}) {
<button onClick={() => handleDelete(item.id) }
}

// PASSING ARGUMENTS TO FUNCTIONS
// to pass arguments to event handlers or functions, we pass via arrow function inside curly braces, instead of {this.fnName()} we use:
{() => this.fnName(arg)}


