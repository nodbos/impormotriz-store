import React from 'react';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">AMORTIGUADORES</h1>
                        <span className="subtitle">COMPRA YA!</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">FRENOS</h1>
                        <span className="subtitle">COMPRA YA!</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">LLANTAS</h1>
                        <span className="subtitle">COMPRA YA!</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">LUCES</h1>
                        <span className="subtitle">COMPRA YA!</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">BOMBAS DE AGUA</h1>
                        <span className="subtitle">COMPRA YA!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
