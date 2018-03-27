/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from 'ClientApp/static/logo_banner.png'

/**
 * Internal dependencies
 */
import AuthNavLink from 'ClientApp/components/authNavLink';
import PrivateNavLink from 'ClientApp/components/privateNavLink';
import authHelper from 'ClientApp/helpers/authHelper';

export class NavMenu extends React.Component {
    render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}> <img src={logo} width="100" height="40" alt="OnTask"/> </Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <PrivateNavLink
                                exact
                                to={"/"}
                                glyphiconClassName="glyphicon glyphicon-home"
                                text="Home"
                            />
                        </li>
                        <li>
                            <PrivateNavLink
                                to={"/calendar"}
                                glyphiconClassName="glyphicon glyphicon-calendar"
                                text="Calendar"
                            />
                        </li>
                        <li>
                            <PrivateNavLink
                                to={"/eventParents"}
                                glyphiconClassName="glyphicon glyphicon-th-list"
                                text="Parents"
                            />
                        </li>
                        <li>
                            <PrivateNavLink
                                to={"/eventGroups"}
                                glyphiconClassName="glyphicon glyphicon-th-list"
                                text="Groups"
                            />
                        </li>
                        <li>
                            <AuthNavLink />
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
