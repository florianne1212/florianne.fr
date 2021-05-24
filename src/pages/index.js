import React, {useState, useEffect} from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"


//context

import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

//components
import HomeBanner from '../components/homePage/HomeBanner'
import Home from '../components/homePage/Home'

import common_fr from "./../locales/fr/aboutme.json";
import common_en from "./../locales/en/aboutme.json";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

    

const IndexPage = props => {
	i18next.init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            fr: {
                common: common_fr
            },
        },
    });
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
			 <I18nextProvider i18n={i18next}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Florianne</title>
			</Helmet>

			<Layout>
				{/* <HomeBanner onCursor={onCursor} /> */}
				{/* <HomeContent /> */}
				<Home/>
				
			</Layout>
			</I18nextProvider>
		</div>
	);
}

export default IndexPage
