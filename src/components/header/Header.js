import React, {Component} from 'react';
import image from '../../assets/img/github_cat.png'
import './header.css'

class Header extends Component {
    render() {
        return (
            <header className="header flex column item_center w100">
                <div className={'wrapper flex row item_center jc_between'}>
                    <div className={'flex item_center js_between'}>
                        <a href="https://github.com/"><img src={image} alt='cat' className="cat_logo"/></a>
                        <nav className='nav_menu transition'>
                            <ul className="flex row list_none jc_between pl20">
                                <li>Why GitHub? <i className="fa fa-angle-down"/></li>
                                <li>Team</li>
                                <li>Enterprise <i className="fa fa-angle-down"/></li>
                                <li>Explore</li>
                                <li>Marketplace</li>
                                <li>Pricing <i className="fa fa-angle-down"/></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='flex jc_between item_center right_block'>
                        <input type="text" className={'w55 header_input'} placeholder={'Search'}/>
                        <i className={'fa fa-toggle-right input_icon'}/>
                        <div className={'w35 sign_block flex jc_between item_center'}>
                            <span >Sign in</span>
                            <span className={'sign_up'}>Sign up</span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
