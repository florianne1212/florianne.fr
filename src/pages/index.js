import React, {useState, useEffect} from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"


//context

import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

//components
import HomeBanner from '../components/homePage/HomeBanner'
import Home from '../components/homePage/Home'


import { useTranslation } from "react-i18next"


    

const IndexPage = props => {

	const { t } = useTranslation()
	const [isClient, setClient] = useState(false);
	const key = isClient ? "client" : "server";

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}

	useEffect(() => {
		setClient(true);
	}, []);

	if ( !isClient ) return null;
	return (
		<div key={key}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t('home.title')}</title>
			</Helmet>

			<Layout>
				{/* <HomeBanner onCursor={onCursor} /> */}
				{/* <HomeContent /> */}
				<Home/>
				
			</Layout>
		</div>
	);
}

export default IndexPage
