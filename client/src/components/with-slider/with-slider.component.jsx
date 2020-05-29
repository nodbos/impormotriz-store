import React from 'react';
import Carousel from 'react-multi-carousel';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { IconContext } from 'react-icons';

import 'react-multi-carousel/lib/styles.css';
import './with-slider.styles.scss';

const iconSize = 5;

const CustomArrow = ({ onClick, side }) => {
    return (
        <button className={`arrow ${side}`} onClick={() => onClick()}>
            <IconContext.Provider
                value={{
                    size: `${iconSize}em`,
                }}>
                {side === 'right' ? (
                    <IoIosArrowForward className='arrow-icon' />
                ) : (
                    <IoIosArrowBack className='arrow-icon' />
                )}
            </IconContext.Provider>
        </button>
    );
};

//<div className='meter' />

const WithSlider = ({
    children,
    desktopItem,
    tabletItem,
    mobileItem,
}) => {
    return (
        <div className='progress-bar'>
            <Carousel
                additionalTransfrom={0}
                autoPlay
                autoPlaySpeed={5000}
                draggable
                infinite
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: desktopItem,
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: tabletItem,
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: mobileItem,
                    },
                }}
                showDots={false}
                swipeable
                customRightArrow={
                    <CustomArrow
                        side='right'
                        aria-label='Go to next slide'
                    />
                }
                customLeftArrow={
                    <CustomArrow
                        side='left'
                        aria-label='Go to next slide'
                    />
                }>
                {children}
            </Carousel>
        </div>
    );
};

export default WithSlider;
