import React, { useState } from 'react';
import Page1 from "./pages/Page1/page1"
import NavigationPage from './pages/NavigationPane/NavigationPage';

export default function App() {

    const [currPage, setCurrPage] = useState("1");

    function updatePageNumber(value) {
        setCurrPage({value})
    }

    return <div className='mainBox'>
        <NavigationPage pageNum={currPage}/>
        <Page1 pageNumFunc = {updatePageNumber}/>
    </div>

}