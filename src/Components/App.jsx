import React from 'react';
import Page1 from "./pages/Page1/page1"
import NavigationPage from './pages/NavigationPane/NavigationPage';

export default function App() {
    return <div className='mainBox'>
        <NavigationPage />
        <Page1 />
    </div>

}