import React, {useState} from 'react'

//styled Component
import {
	Main,
	Download
} from '../styles/resumeStyles';

//context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

//layout
import Layout from "../components/layout"

//pdf
import resume from '../assets/document/resume.pdf';
import { Document, Page, pdfjs   } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {

	const {currentTheme, cursorStyles} = useGlobalStateContext()
	const dispatch = useGlobalDispatchContext()

	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}

	const [numPages, setNumPages] = useState(null);
  
	function onDocumentLoadSuccess({ numPages }) {
	  setNumPages(numPages);
	}
  
	return (
	<div>
		<Layout>
			<Main>
				<Document
					file={resume}
					onLoadSuccess={onDocumentLoadSuccess}
				>
					<Page pageNumber={1} />
				</Document>
			</Main>
			<Download>
				<a href={resume} download="Florianne_Coudert.pdf">
					<button
						href={resume} download="Florianne_Coudert.pdf"
						onMouseEnter={() => onCursor("pointer")}
						onMouseLeave={onCursor}
					>
						<a href={resume} download="Florianne_Coudert.pdf"></a>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/>
						</svg>
					</button>
				</a>
			</Download>
		</Layout>
	</div>
	);
}

export default Resume