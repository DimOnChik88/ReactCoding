import React, {Component} from 'react';
import './content.css';
import NavMenu from "./NavMenu/NavMenu";
import ContentLeftSide from "./ContentLeftSide/ContentLeftSide";
import AllRepo from "../allRepo/AllRepo";

class Content extends Component {


    render() {
        return (
            <div className='w100 flex column item_center'>
                <NavMenu className='stick'/>
                <div className='wrapper flex row content'>
                    <ContentLeftSide/>
                    <div className='w70 flex column item_center content_right'>
                        <AllRepo/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
