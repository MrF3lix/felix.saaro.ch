import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Slider = ({ items, selectedId, direction }) => items.map(item => {
    const animationName = direction === 'UP' ? 'slider__animation--down' : 'slider__animation';

    return (
        <CSSTransition
            key={item.id}
            in={item.id === selectedId}
            classNames={animationName}
            timeout={1000}
            appear={true}
            unmountOnExit
        >
            <div className="slider">
                <img src={item.image.src} alt={item.image.alt} />
            </div>
        </CSSTransition>
    );
});

export default Slider;