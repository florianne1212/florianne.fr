import React, {useState} from 'react'

//styled Component
import {
} from '../styles/projectsStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'
import { useTranslation } from "react-i18next"
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

	const { t } = useTranslation()
	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}
  
	return (
	<div>
		<Layout>
			<BannerTitle>
				<Headline>{t('Myprojects.title')}</Headline>
			</BannerTitle>
			{/* <Title></Title> */}
			<ContentComing>
					{t('Myprojects.description.line1')} <br />
					{t('Myprojects.description.line2')} <br />
					{t('Myprojects.description.line3')} <br />
					{t('Myprojects.description.line4')}
					&nbsp;
					<a
						href="https://www.test.revealyourmessage.com/"
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
						onClick={onCursor}
					>
						{t('Myprojects.description.link')} <br />
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