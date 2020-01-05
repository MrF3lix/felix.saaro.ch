import React from 'react';
import classNames from 'classnames';

const Controls = ({ items, selectedId, setSelectedId, setDirection }) => (
    <div className="controls">
        {items.map(item => (
            <div
                key={item.id}
                className={classNames('control__item', {
                    'control__item--active': item.id === selectedId
                })}
                onClick={() => {
                    setSelectedId(item.id);
                    setDirection(item.id > selectedId ? 'DOWN' : 'UP');
                }}
            >
                {item.year}
                <span className="active__line"></span>
            </div>
        ))}
    </div>
);

export default Controls;