### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com

- What is Babel?
JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. 

- What is JSX?
 extension to the JavaScript language syntax which provides a way to structure component rendering using syntax familiar to many developers commonly used in React. It is similar in appearance to HTML.

- How is a Component created in React?
write a JavaScript function

- What are some difference between state and props?
State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.

- What does "downward data flow" refer to in React?
he idea that parent components pass data down to their children via props.

- What is a controlled component?
a component that is controlled by React state,

- What is an uncontrolled component?
components that manage their own state internally.

- What is the purpose of the `key` prop when rendering a list of components?
create a relationship between the component and the DOM element.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect.  What use cases is it used for in React components?
allows you to perform side effects in your components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
 it doesn't cause a re-render.
 Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

- When would you use a ref? When wouldn't you use one?
Refs provide a way to access DOM nodes or React elements created in the render method.


- What is a custom hook in React? When would you want to write one?
reusable functions that a React JS software developer can use to add special and unique functionality to the React applications