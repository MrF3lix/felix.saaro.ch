import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

const Content = ({ items, selectedId, direction }) => {
    return (
        <div className="content">
            {items.map(item => {
                const animationName = direction === 'UP' ? 'item__animation--down' : 'item__animation';
                return (
                    <CSSTransition
                        key={item.id}
                        in={item.id === selectedId}
                        classNames={animationName}
                        timeout={1000}
                        appear={true}
                        unmountOnExit
                    >
                        <article
                            className={classNames('item', {
                                'item--active': item.id === selectedId
                            })}
                        >
                            <div className="item__title">{item.year}</div>
                            <div className="item__subtitle">{item.title}</div>
                            <div className="item__body">{item.content}</div>
                        </article>
                    </CSSTransition>

                );
            })}
        </div>
    );
};

export default Content;