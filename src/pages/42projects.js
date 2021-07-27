import React, {useState} from 'react'
import ReactPageScroller from 'react-page-scroller';
import FirstComponent from "../components/42Projects/FirstComponent";
import SecondComponent from "../components/42Projects/SecondComponent";
import ThirdComponent from "../components/42Projects/ThirdComponent";
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"



const MyProjects = () => {
	// const { t } = useTranslation()
	// const {currentTheme, cursorStyles} = useGlobalStateContext()
	// const dispatch = useGlobalDispatchContext()

	// const onCursor = cursorType => {
	// 	cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
	// 	dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	// }
	if (typeof window === "undefined") return (<div>test</div>);

	return (
	<div>
		<Layout>
				<ReactPageScroller
					// pageOnChange={this.handlePageChange}
					// onBeforePageScroll={this.handleBeforePageChange}
					// customPageNumber={this.state.currentPage}
				>
					<FirstComponent />
          			<SecondComponent />
				</ReactPageScroller>
		</Layout>
	</div>
	);
}

export default MyProjects