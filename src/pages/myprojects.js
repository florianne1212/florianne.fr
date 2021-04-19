import React, {useState} from 'react'

//styled Component
import {
} from '../styles/projectsStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

//layout
import Layout from "../components/layout"
import {
	ContentComing, 
	Headline,
	BannerTitle,
} from "../styles/projectsStyle"


const MyProjects = () => {

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}
  
	return (
	<div>
		<Layout>
			<BannerTitle>
				<Headline>Coming soon</Headline>
			</BannerTitle>
			{/* <Title></Title> */}
			<ContentComing>
					On the 1st of May I am launching my own etsy shop to sell online scratching card <br />
					here are some preview and the link to the preview
			</ContentComing>
		</Layout>
	</div>
	);
}

export default MyProjects