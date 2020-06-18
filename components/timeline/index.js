import React, { useState, useEffect, useRef } from 'react';
import data from './data.json';
import Controls from './controls';
import Content from './content';
import Slider from './slider.js';

import './timeline-styles.scss';
import './timeline-animations.scss';

const TimeLine = () => {
    const [direction, setDirection] = useState();

    const [selectedId, _setSelectedId] = useState(0);
    const selectedIdRef = useRef(selectedId);
    const setSelectedId = data => {
        selectedIdRef.current = data;
        _setSelectedId(data);
    };

    const [, _setIsAnimating] = useState(false);
    const isAnimatingRef = useRef(selectedId);
    const setIsAnimating = data => {
        isAnimatingRef.current = data;
        _setIsAnimating(data);
    };

    useEffect(() => {
        bindEvents();
        () => unBindEvents();
    }, []);

    const bindEvents = () => {
        window.addEventListener('wheel', onScroll);
        window.addEventListener('wheel', onScroll);
    };

    const unBindEvents = () => {
        window.removeEventListener('wheel', onScroll);
    };

    const onScroll = (e) => {
        if (isAnimatingRef.current === true) return;
        if (window.innerWidth < 500) return;
        if (Math.abs(e.deltaY) < 10) return;
        const selectedItemId = selectedIdRef.current;

        let direction = e.deltaY < 0 ? 'UP' : 'DOWN';
        let activeItem = direction === 'UP' ? selectedItemId - 1 : selectedItemId + 1;

        if (activeItem < 0 || activeItem >= data.items.length || activeItem === selectedItemId) return;

        setIsAnimating(true);
        setDirection(direction);
        setSelectedId(activeItem);

        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    return (
        <main>
            <div className="title__container">
                <h2>{data.title}</h2>
            </div>
            <div className="content__container">
                <Controls
                    items={data.items}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    setDirection={setDirection}
                />
                <Content
                    items={data.items}
                    selectedId={selectedId}
                    direction={direction}
                />
            </div>
            <div className="slider__container">
                <Slider
                    items={data.items}
                    selectedId={selectedId}
                    direction={direction}
                />
            </div>
        </main>
    );
};

export default TimeLine;