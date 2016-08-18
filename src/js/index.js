import React from 'react'
import { render } from 'react-dom'
import Button from './components/button'

render(
	<Button
		text="Hello React"
		click={() => alert("Hello React alert")}
	/>,
	document.querySelector('#app')
)
