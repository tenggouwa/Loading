import React from 'react'
import './index.scss'

const delay = ['0s', '0.2s', '0.4s', '0.6s', '0.8s', '1s', '1.2s', '1.4s']

const Loading5 = () => (
    <div className="loadable-loading">
        <div className="loading5">
            {
                delay.map(item => (
                    <div
                        className="loading5-item"
                        style={{ animationDelay: item }}
                        key={item}
                    />
                ))
            }
        </div>
    </div>)


export default Loading5
