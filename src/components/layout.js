import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withTrans } from '../i18n/withTrans'

//styled components

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

//components

import Header from './header'
import Cursor from './customCursor'
import Navigation from './navigation'

//context

import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

const GlobalStyle = createGlobalStyle`

	//html, body {
	//	height: 100%;
	//}
	
	${normalize}
	* {
		text-decoration: none;
		cursor: none !important;
	}

	html {
		box-sizing: border-box;
		-webkit-font-smoothing: antialised;
		font-size: 16px
	}
	

	body {
		
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background : ${props => props.theme.background};
		overscroll-behavior: none;
		overflow-x: hidden
	}
`

const Layout = ({ children, t, i18n }) => {

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const translatedTitle = t(`site.${data.site.siteMetadata.title}`)

	const darkTheme = {
	background: "#000000",
	first: '#111111',
	second: '#232323',
    text: "#ffffff",
	blue: '#b8dbd9',
	}

	const lightTheme = {
    background: "#fff1eb",
    first: '#ffeae1',
	second: '#ffe4db',
	text: "#000000",
	blue: '#588b8b', 
		
  }

	const {currentTheme, cursorStyles} = useGlobalStateContext()
  	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}

	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<ThemeProvider theme={currentTheme === 'dark'? darkTheme : lightTheme}>
			<GlobalStyle />
			<Cursor toggleMenu={toggleMenu} />
			<Header 
				onCursor={onCursor}
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
			/>
			<Navigation 
				toggleMenu={toggleMenu}
				setToggleMenu={setToggleMenu}
				onCursor={onCursor}
			/>
			<main>{children}</main>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

 export default withTrans(Layout)
