import React, {Component} from 'react';
import './navMenu.css'

class NavMenu extends Component {
    componentDidMount() {
        window.onscroll = function () {
            fix_nav_menu()
        }
        let nav_menu = document.getElementById('nav_menu')
        let stick = nav_menu.offsetTop
        function fix_nav_menu(){
            if (window.pageYOffset > stick) {
                nav_menu.classList.add('stick')
            } else {
                nav_menu.classList.remove('stick')
            }
        }
    }
    render() {
        return (
            <div className='w100 content_menu flex column item_center' id='nav_menu'>
                <ul className='list_none flex row' id='menu'>
                    <li className='content_menu_item' id='overview' onClick={()=>this.onMenuChose('overview')}>
                        <i className='item_ico fa fa-address-card-o'/>
                        Overview
                    </li>
                    <li className='content_menu_item active' id='repositories' onClick={()=>this.onMenuChose('repositories')}>
                        <i className='item_ico fa fa-desktop'/>
                        Repositories
                    </li>
                    <li className='content_menu_item' id='projects' onClick={()=>this.onMenuChose('projects')}>
                        <i className='item_ico fa fa-list-alt'/>
                        Projects
                    </li>
                    <li className='content_menu_item' id='packages' onClick={()=>this.onMenuChose('packages')}>
                        <i className='item_ico fa fa-hdd-o'/>
                        Packages
                    </li>
                </ul>
            </div>
        );
    }
    onMenuChose (element) {
        for (let child of document.getElementById('menu').children) {
            child.classList.remove('active')
        }
        document.getElementById(element).classList.add('active')
    }
}

export default NavMenu;
