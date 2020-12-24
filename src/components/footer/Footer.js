import React, {Component} from 'react';
import logo from '../../assets/img/GitHub-Mark.png';

class Footer extends Component {
    render() {
        return (
            <div className='w100 flex column item_center'>
                <nav className='wrapper footer'>
                    <ul className='list_none flex row jc_between'>
                        <li className='grey'>© 2020 GitHub, Inc.</li>
                        <li className='footer_nav'><a href="https://github.com/site/terms">Terms</a></li>
                        <li className='footer_nav'><a href="https://github.com/site/privacy">Privacy</a></li>
                        <li className='footer_nav'><a href="https://github.com/site/security">Security</a></li>
                        <li className='footer_nav'><a href="https://github.com/site/status">Status</a></li>
                        <li className='footer_nav'><a href="https://github.com/site/help">Help</a></li>
                        <li><a href="https://github.com/"><img src={logo} alt="logo" className='logo'/></a></li>
                        <li className='footer_nav'><a href="https://github.com/contact">Contact GitHub</a></li>
                        <li className='footer_nav'><a href="https://github.com/pricing">Pricing</a></li>
                        <li className='footer_nav'><a href="https://docs.github.com/">API</a></li>
                        <li className='footer_nav'><a href="https://services.github.com/">Training</a></li>
                        <li className='footer_nav'><a href="https://github.blog/">Blog</a></li>
                        <li className='footer_nav'><a href="https://github.com/about">About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Footer;
