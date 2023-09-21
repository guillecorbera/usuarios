import Home from './Home';
import { Routes, Route } from 'react-router-dom';

const Default = () => {
    return (
        <div>
        {/* <img src="http://www.supah.it/dribbble/008/008.jpg" /> */}
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>I tried to catch some fog, but i mist</p>
            <button onClick={
                () => window.history.back()
            }>Go Back</button>
        </div>
)}  




export default Default;