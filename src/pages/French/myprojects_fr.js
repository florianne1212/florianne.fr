import React, {useState} from 'react'

//styled Component
import {
} from '../../styles/projectsStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../../context/globalContext'

//layout
import LayoutFR from "../../components/French/layout_fr"
import {
	ContentComing, 
	Headline,
	BannerTitle,
	PreviewVideo,
} from "../../styles/projectsStyle"


const MyProjectsFR = () => {

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}
  
	return (
	<div>
		<LayoutFR>
			<BannerTitle>
				<Headline>A venir</Headline>
			</BannerTitle>
			{/* <Title></Title> */}
			<ContentComing>
					Le 1er Mai je vais lancer ma boutique Etsy pour vendre des cartes de voeux en ligne qui pourront être grattées.<br />
					Les acheteur recevront un lien avec le message qu'ils souhaitent et pourront l'offrir.<br />
					C'est une idée de cadeau original qui change des traditionnels cartes en papier.<br />
					Voici une avant-première et le lien d'exemple d'une&nbsp;
					<a
						href="https://www.test.revealyourmessage.com/"
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
						onClick={onCursor}
					>
						première version.
					</a>
			</ContentComing>
			<PreviewVideo>
					<video
						loop
						autoPlay
						muted src={require('../../assets/video/reveal.mp4').default}>
					</video>
			</PreviewVideo>
		</LayoutFR>
	</div>
	);
}

export default MyProjectsFR