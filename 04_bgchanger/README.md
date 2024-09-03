# React Color Picker Application

This is a simple React application that allows users to change the background color of the screen by clicking on different color buttons. The application makes use of React's `useState` hook for managing state.

## Code Explanation

### Imports
I am importing the `useState` hook from React, which is used to add state to functional components.
```javascript
import { useState } from "react"
```

# **Important question for interview perspective

**Why we use onClick={() => setColor("red")} instead of just setColor() directly:**

__Answer =>__ 
``Syntax onClick={() => setColor("red")}:``
* This is an inline arrow function. When the button is clicked, the function () => setColor("red") is executed.
* setColor("red") is then called inside this function, updating the state with the value "red".
* Using the arrow function allows you to pass arguments to the setColor function, which in this case is the color "red".

``Syntax onClick={setColor}:``
* This would attempt to pass the setColor function directly as an event handler.
* However, in this case, setColor expects an argument (the new color value), and using it directly would not pass any arguments, leading to errors or unexpected behavior.


#### For more information visit the website [React Events(onClick)](https://www.w3schools.com/react/react_events.asp)
