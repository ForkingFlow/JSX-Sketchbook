import React from 'react'
import { createRoot } from 'react-dom/client'
import Avatar from './Avatar'

const ROOT = createRoot(document.querySelector('#app'))


const data = [
	{
		id: "001",
		alt: "person with curly hair and a black T-shirt"
	},

	{
		id: "002",
		alt: "person wearing a hijab and glasses"
	},

	{
		id: "002",
		alt: "person wearing a hijab and glasses"
	},

	{
		id: "004",
		alt: "person with a pink mohawk and a raised eyebrow"
	},

]

const App = () => {
	return (
		<>
			<div className="avatar-set">
			{data.map((avatar)=>(
				<Avatar key={avatar.id} id={avatar.id} atl={data.alt} 
				/>
			))}
			</div>
		</>
	)
}

/*
-You should create an array that holds the data needed for all avatars.
-That array should be iterated over, creating an <Avatar /> element for each item in the array.
-There should be no key warnings in the console.
 */

ROOT.render(<App />)
