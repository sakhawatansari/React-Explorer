# Link and NavLink components in React-Router-Dom

- The __Link__ and __NavLink__ are the components for anchor tags replacement provided by react-router-dom to navigate around the react application. Generally, we use anchor tags for this purpose while navigating.

- Anchor tags will reload the page and re-render all the components. While __Link__ and __NavLink__ will only re-render updated components matched with the URL path of the Route without reloading. It helps the Single-Page Applications to work faster while routing.


## Link Component Props:

- __to:__ String or object that specifies the pathname.
- __replace:__ Replaces the pathname in the history stack with new.
- __innerRef:__ Passes ref to the element rendered by the component.

## NavLink Component Props:

- __to, replace, innerRef__ same as the Link Component.
- __className:__ Specifies the CSS class name you want to apply to the element when active.
- __isActive:__ Returns boolean value whether the link is active or not.
- __style:__ To apply inline CSS.
- __end:__ Match the pathname precisely with the URL.

## More Information please visit the website 
- [Geeksforgeek](https://www.geeksforgeeks.org/link-and-navlink-components-in-react-router-dom/)

