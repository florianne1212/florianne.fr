import React, {useState, useEffect} from "react"
import { Helmet } from "react-helmet"
import LayoutFR from "../../components/French/layout_fr"

//context

import {useGlobalStateContext, useGlobalDispatchContext} from '../../context/globalContext'

//components
import HomeBannerFR from '../../components/French/HomeBanner_fr'
import HomeFR from '../../components/French/Home_fr'


const IndexPage = props => {
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
				<title>Florianne</title>
			</Helmet>

			<LayoutFR>
				<HomeFR />
			</LayoutFR>
		</div>
	);
}

export default IndexPage
