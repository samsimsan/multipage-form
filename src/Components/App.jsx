import React, { useState } from 'react';
import Page1 from "./pages/Page1/page1"
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import NavigationPage from './pages/NavigationPane/NavigationPage';
import Button from './Button';

export default function App() {

    const [currPage, setCurrPage] = useState(1);

    function updatePageNumber(value) {
        if (value === 0) {
            value = 1;
        }
        setCurrPage(value)
        // console.log(value);
    }

    function displayPage() {
        switch (currPage) {
            case 1:
                return <Page1 />;
            case 2:
                return <Page2 />
            case 3:
                return <Page3 />
            case 4:
                return <Page4 />
            default:
                return <Page1 />;
        }
    }

    return <div className='mainBox'>
        <NavigationPage pageNum={currPage.toString()} />
        {displayPage()}
        <Button Clicked={updatePageNumber} pageNum={currPage} class="submit" text="Next Step" />
    </div>

}