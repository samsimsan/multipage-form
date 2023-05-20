import React, { useState } from 'react';
import Page1 from "./pages/Page1/page1"
import Page2 from './pages/Page2/page2';
import Page3 from './pages/Page3/page3';
import Page4 from './pages/Page4/page4';
import Page5 from './pages/Page5/page5';
import NavigationPage from './pages/NavigationPane/NavigationPage';
import Button1 from './Buttons/Button1';


export default function App() {

    const [currPage, setCurrPage] = useState(1);
    const [buttonClass, setButtonClass] = useState("submit")
    const [buttonText, setButtonText] = useState("Next Step")

    function showButtons() {
        if (currPage !== 5) {
            return (
                <div>
                    <Button1 Clicked={updatePageNumber} pageNum={currPage} incOrDec={1} class={buttonClass} text={buttonText} />
                    {currPage === 1 ? "" : <Button1 Clicked={updatePageNumber} pageNum={currPage} class="GoBack" incOrDec={-1} text="Go Back" />}
                </div>
            )
        }
    }

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
            case 5:
                return <Page5 />
            default:
                return <Page1 />;
        }
    }

    return <div className='mainBox'>
        <NavigationPage pageNum={currPage.toString()} />
        {displayPage()}
        {showButtons()}
    </div>

}