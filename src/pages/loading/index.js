import React from 'react'

import Load1 from '@/components/loading1'
import Load2 from '@/components/loading2'
import Load3 from '@/components/loading3'
import Load4 from '@/components/loading4'
import Load5 from '@/components/loading5'
import Load6 from '@/components/loading6'
import Load7 from '@/components/loading7'
import Load8 from '@/components/loading8'
import Load9 from '@/components/loading9'
import Load10 from '@/components/loading10'
import Load11 from '@/components/loading11'
import Load12 from '@/components/loading12'

import './index.scss'

const github = 'https://github.com/tenggouwa/Loading/tree/master/src/components/loading'
const loadComponents = [{
    index: 0,
    render: (<Load1 />),
    backGround: '#ffaeae',
}, {
    index: 1,
    render: (<Load2 />),
    backGround: '#ffd182',
}, {
    index: 2,
    render: (<Load3 />),
    backGround: '#ffff9f',
}, {
    index: 3,
    render: (<Load4 />),
    backGround: '#9fff9f',
}, {
    index: 4,
    render: (<Load5 />),
    backGround: '#e5f2ff',
}, {
    index: 5,
    render: (<Load6 />),
    backGround: '#80afff',
}, {
    index: 6,
    render: (<Load7 />),
    backGround: '#fb92ff',
}, {
    index: 7,
    render: (<Load8 />),
    backGround: '#ffaeae',
}, {
    index: 8,
    render: (<Load9 />),
    backGround: '#ffd182',
}, {
    index: 9,
    render: (<Load10 />),
    backGround: '#ffff9f',
}, {
    index: 10,
    render: (<Load11 />),
    backGround: '#9fff9f',
}, {
    index: 11,
    render: (<Load12 />),
    backGround: '#fee5ff',
}]

const Load = () => (
    <div className="loading">
        {
            loadComponents.map(item => (
                <div
                    key={item.index}
                    className="loading-item"
                    style={{ background: item.backGround }}
                    onClick={() => { window.open(`${github}${item.index + 1}`) }}
                >
                    {item.render}
                </div>
            ))
        }
    </div>)
export default Load
