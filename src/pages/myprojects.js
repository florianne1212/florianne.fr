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
	PreviewVideo,
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
					On the 1st of May I am launching my own etsy shop to sell online greeting cards that can be scratched.<br />
					The buyers will receive a link with the message they desire and they will be able to gift it.<br />
					It is an original gift idea that offer a change from traditional paper cards.<br />
					Here are some preview and the link to an example with the&nbsp;
					<a
						href="https://www.test.revealyourmessage.com/"
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
						onClick={onCursor}
					>
						first version.
					</a>
			</ContentComing>
			<PreviewVideo>
					<video
						loop
						autoPlay
						muted src={require('../assets/video/reveal.mp4').default}>
					</video>
			</PreviewVideo>
		</Layout>
	</div>
	);
}

export default MyProjects