import React from 'react'
import { createRoot } from 'react-dom/client'

const ROOT = createRoot(document.querySelector('#app'))

const todos = [
  'buy milk',
  'feed goldfish',
  'return library book',
];		

/*
 don't use Index as Keys, if we rearrange
 They won't be unique to the valuf
 Key Value needs to be top-level on the jsx-Partent
 On the Fragment we need to write REact.Fragment key
*/

const App = () => {
	return (
		<ul>
			{todos.map((arrItem,idx)=>(
				<li key={idx}> {arrItem}</li>
			))}
		</ul>
	)
}

ROOT.render(<App/>)
