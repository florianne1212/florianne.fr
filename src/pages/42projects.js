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
	SmallerHeadline,
	BannerTitle,
	PreviewVideo,
	CUB3D,
	MINISHELL
} from "../styles/projectsStyle"


const MyProjects = () => {
	const { t } = useTranslation()
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
				<SmallerHeadline>{t('42projects.title')}</SmallerHeadline>
			</BannerTitle>
			{/* <Title></Title> */}
			<ContentComing>
					{t('42projects.intro')}&nbsp;
					<a
						href="https://github.com/florianne1212"
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
						onClick={onCursor}
					>
						 github.
					</a>
			</ContentComing>
			<CUB3D>
				<a>
					<strong>CUB3D<br/></strong>
					{t('42projects.cub3d.line1')}<br/>
					{t('42projects.cub3d.line2')}<br/>
					{t('42projects.cub3d.line3')}
				</a>
				<video
						loop
						autoPlay
						muted src={require('../assets/video/cat_cub.mp4').default}>
				</video>
			</CUB3D>
			<MINISHELL>
				<video
						loop
						autoPlay
						muted src={require('../assets/video/minishell_cut.mp4').default}>
				</video>
				<a>
					<strong>MINISHELL<br/></strong>
					{t('42projects.minishell')}<br/> 
				</a>
			</MINISHELL>
		</Layout>
	</div>
	);
}

export default MyProjects