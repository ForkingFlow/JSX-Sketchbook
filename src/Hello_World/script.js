import React from 'react'
import {createRoot} from 'react-dom/client'

//
// const el = React.createElement('p', {id: 'test'}, 'Hello World')
//
//
//
// const container = document.querySelector('#root')
// const root = createRoot(container)
//
// root.render(el)
//
function render(reactElement, containerDOMElement) {
    const el = document.createElement(reactElement.type)
    for(const key in reactElement.props){
        el.setAttribute(key,reactElement[key])
    }
    el.innerText = reactElement.children
    containerDOMElement.appendChild(el)
    
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://wikipedia.org/',
  },
  children: 'Read more on Wikipedia',
};

const containerDOMElement =
  document.querySelector('#root');

render(reactElement, containerDOMElement);

