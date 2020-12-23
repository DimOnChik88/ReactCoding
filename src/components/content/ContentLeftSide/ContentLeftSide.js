import React, {Component} from 'react';
import avatar from "../../../assets/img/7413593.jpeg";
import fb from "../../../assets/img/fb.png";
import onavo from "../../../assets/img/onavo.png";
import internet from "../../../assets/img/internet.png";
import angular from "../../../assets/img/angular.png";
import node from "../../../assets/img/node.png";
import go from "../../../assets/img/go.png";
import telecom from "../../../assets/img/telecom.jpeg";
import golangci from "../../../assets/img/golangci.png";
import './contentLeftSide.css';

class ContentLeftSide extends Component {
    render() {
        return (
            <div className='w24 flex column content_left'>
                <img src={avatar} alt="avatar" className='avatar'/>
                <div className='flex column'>
                    <span className='nick_name'><strong>Ariel Mashraki</strong></span>
                    <span className='sub_name'>a8m</span>
                </div>
                <div className='flex row jc_between'>
                    <button className='w70'>Follow</button>
                    <button className='w24 dots'>. . .</button>
                </div>
                <div className='flex row follow'>
                    <a href="https://github.com/a8m?tab=followers">
                        <i className='fa fa-users'/>
                        <span className='bold'>1.4k</span>
                        <span> followers · </span>
                    </a>
                    <a href="https://github.com/a8m?tab=following">
                        <span className='bold'> 56</span>
                        <span> following · </span>
                    </a>
                    <a href="https://github.com/a8m?tab=stars">
                        <i className='fa fa-star-o'/>
                        <span className='bold'> 242</span>
                    </a>
                </div>
                <div className='flex column contacts'>
                    <a href='https://github.com/facebook'>
                        <i className='fa fa-building-o'/>
                        <strong> @facebook</strong>
                    </a>
                    <div>
                        <i className='fa fa-map-marker'/>
                        <span> Tel Aviv, Israel</span>
                    </div>
                    <a href='http://entgo.io/'>
                        <i className='fa fa-link'/>
                        <span> entgo.io</span>
                    </a>
                    <a href='https://twitter.com/arielmashraki'>
                        <i className='fa fa-twitter'/>
                        <span> @arielmashraki</span>
                    </a>
                </div>
                <div className='flex column highlights'>
                    <h3>Highlights</h3>
                    <div>
                        <i className='fa fa-asterisk'/>
                        <span> Arctic Code Vault Contributor </span>
                    </div>
                    <div>
                        <i className='fa fa-star-o'/>
                        <span className='pro'>PRO</span>
                    </div>
                </div>
                <div className='flex column'>
                    <h3>Organizations</h3>
                    <div className='flex row wrap'>
                        <a href='https://github.com/facebook'>
                            <img src={fb} alt="fb" className='organization_ico'/>
                        </a>
                        <a href='https://github.com/Onavo'>
                            <img src={onavo} alt="onavo" className='organization_ico'/>
                        </a>
                        <a href='https://github.com/internetorg'>
                            <img src={internet} alt="internet" className='organization_ico'/>
                        </a>
                        <a href='https://github.com/angular-filter'>
                            <img src={angular} alt="angular" className='organization_ico'/>
                        </a>
                        <a href='https://github.com/nodejs'>
                            <img src={node} alt="node" className='organization_ico'/>
                        </a>
                        <a href='https://github.com/go-samples'>
                            <img src={go} alt="go" className='organization_ico'/>
                        </a>
                        <a href='https://github.com/Telecominfraproject'>
                            <img src={telecom} alt="telecom" className='organization_ico'/>
                        </a>
                        <a href='https://github.com/golangci'>
                            <img src={golangci} alt="golangci" className='organization_ico'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentLeftSide;
