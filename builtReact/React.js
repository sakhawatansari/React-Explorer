function customRender(reactElement, container){

    /*
    // create dom element and then inject append child
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // set attributes
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // Create loop base code and 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// This is called tree
const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Clicked me to visit website'
}

const mainContainer = document.querySelector('#root')

// create method or element that use above element add to root
// first parameter what is inject => reactElement
// second parameter where to inject => mainContainer
customRender(reactElement, mainContainer)