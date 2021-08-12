import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import Write from './Write';
 
function Footer() {

    const uri = useSelector(state => state.uriReducer.inputData);

    return(
        <div>
            <hr />
            <nav>
                <div>
                    <div><Home /></div>
                    { uri !=='/BoardNew' ?
                    <div><Write /></div> : 
                    <div></div>
                    }
                </div>
            </nav>
        </div>
    );
}
 
export default Footer;