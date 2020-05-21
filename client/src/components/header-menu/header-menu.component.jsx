import React from 'react';
import { connect } from 'react-redux';
import { setMenuActiveItem } from '../../redux/menu/menu.actions';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import {
    IoIosHome,
    //IoMdArrowRoundBack,
    //IoMdArrowRoundForward,
    IoIosCall,
    IoIosBrowsers,
    IoIosBody,
} from 'react-icons/io';
import { IconContext } from 'react-icons';
import { createStructuredSelector } from 'reselect';
import { selectActiveMenuItem } from '../../redux/menu/menu.selector';

import './header-menu.styles.scss';

const mapStateToProps = createStructuredSelector({
    activeItem: selectActiveMenuItem,
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => {
    return {
        signOutStart: () => {
            dispatch(signOutStart());
        },
        setMenuActiveItem: name => {
            dispatch(setMenuActiveItem(name));
        },
    };
};

const titulos = [
    'Inicio',
    'Catalogo',
    'Contacto',
    'Ingresar',
    'Salir',
    'Nosotros',
];

const iconSize = 1.6;
const menuItemsWidth = 4;

const HeaderMenu = ({
    currentUser,
    signOutStart,
    activeItem,
    setMenuActiveItem,
}) => {
    return (
        <div className='header-menu'>
            <Menu
                icon
                pointing
                secondary
                borderless
                defaultActiveIndex={0}
                widths={menuItemsWidth}>
                <Menu.Item
                    name={titulos[0]}
                    active={activeItem === titulos[0]}
                    onClick={() => setMenuActiveItem(titulos[0])}
                    as={Link}
                    to='/'>
                    <div className='menu-content'>
                        <IconContext.Provider
                            value={{
                                size: `${iconSize}em`,
                            }}>
                            <IoIosHome />
                        </IconContext.Provider>
                        <p>{titulos[0]}</p>
                    </div>
                </Menu.Item>
                <Menu.Item
                    name={titulos[1]}
                    active={activeItem === titulos[1]}
                    onClick={() => setMenuActiveItem(titulos[1])}
                    as={Link}
                    to='/catalogo'>
                    <div className='menu-content'>
                        <IconContext.Provider
                            value={{
                                size: `${iconSize}em`,
                            }}>
                            <IoIosBrowsers />
                        </IconContext.Provider>
                        <p>{titulos[1]}</p>
                    </div>
                </Menu.Item>
                <Menu.Item
                    name={titulos[5]}
                    active={activeItem === titulos[5]}
                    onClick={() => setMenuActiveItem(titulos[5])}
                    as={Link}
                    to='/nosotros'>
                    <div className='menu-content'>
                        <IconContext.Provider
                            value={{
                                size: `${iconSize}em`,
                            }}>
                            <IoIosBody />
                        </IconContext.Provider>
                        <p>{titulos[5]}</p>
                    </div>
                </Menu.Item>
                <Menu.Item
                    name={titulos[2]}
                    active={activeItem === titulos[2]}
                    onClick={() => setMenuActiveItem(titulos[2])}
                    as={Link}
                    to='/contacto'>
                    <div className='menu-content'>
                        <IconContext.Provider
                            value={{
                                size: `${iconSize}em`,
                            }}>
                            <IoIosCall />
                        </IconContext.Provider>
                        <p>{titulos[2]}</p>
                    </div>
                </Menu.Item>
            </Menu>
        </div>
    );
};

/*{currentUser ? (
                    <Menu.Item
                        onClick={() => {
                            signOutStart();
                        }}
                        as='div'>
                        <div className='menu-content'>
                            <IconContext.Provider
                                value={{
                                    size: `${iconSize}em`,
                                }}>
                                <IoMdArrowRoundBack />
                            </IconContext.Provider>
                            <p>{titulos[4]}</p>
                        </div>
                    </Menu.Item>
                ) : (
                    <Menu.Item
                        name={titulos[3]}
                        active={activeItem === titulos[3]}
                        onClick={() => {
                            setMenuActiveItem(titulos[3]);
                        }}
                        as={Link}
                        to='/ingresar'>
                        <div className='menu-content'>
                            <IconContext.Provider
                                value={{
                                    size: `${iconSize}em`,
                                }}>
                                <IoMdArrowRoundForward />
                            </IconContext.Provider>
                            <p>{titulos[3]}</p>
                        </div>
                    </Menu.Item>
                )}*/

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderMenu);
