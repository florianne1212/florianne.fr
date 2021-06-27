import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
	LayoutCarousel,
	CarouselVideo
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
			<LayoutCarousel>
				<Carousel>
					<div>
						<BannerTitle>
							<Headline>{t('Myprojects.draw.title')}</Headline>
						</BannerTitle>
						<ContentComing>
							{t('Myprojects.draw.description.line1')}
							{t('Myprojects.draw.description.line2')}
							{t('Myprojects.draw.description.line3')}
							{t('Myprojects.draw.description.line4')}
							&nbsp;
							<a
								href="http://draw.florianne.fr/"
								onMouseEnter={() => onCursor("pointer")}
								onMouseLeave={onCursor}
								onClick={onCursor}
							>
								{t('Myprojects.draw.description.link')} <br /><br />
							</a>
						</ContentComing>
						<CarouselVideo>
							<video
								loop
								autoPlay
								muted src={require('../assets/video/draw_node_crop.mp4').default}>
							</video>
						</CarouselVideo>
					</div>
					<div>
						<BannerTitle>
							<Headline>{t('Myprojects.ryom.title')}</Headline>
						</BannerTitle>
						<ContentComing>
							{t('Myprojects.ryom.description.line1')}
							{t('Myprojects.ryom.description.line2')}
							{t('Myprojects.ryom.description.line3')}
							{t('Myprojects.ryom.description.line4')}
							&nbsp;
							<a
								href="https://www.test.revealyourmessage.com/"
								onMouseEnter={() => onCursor("pointer")}
								onMouseLeave={onCursor}
								onClick={onCursor}
							>
								{t('Myprojects.ryom.description.link')} <br /><br />
							</a>
						</ContentComing>
						<CarouselVideo>
							<video
								loop
								autoPlay
								muted src={require('../assets/video/reveal_my.mp4').default}>
							</video>
						</CarouselVideo>
					</div>
				</Carousel>
			</LayoutCarousel>
			{/* <Title></Title> */}
			
			{/* <PreviewVideo>
					<video
						loop
						autoPlay
						muted src={require('../assets/video/reveal.mp4').default}>
					</video>
			</PreviewVideo> */}
		</Layout>
	</div>
	);
}

export default MyProjects