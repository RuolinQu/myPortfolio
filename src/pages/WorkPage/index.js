import React from 'react'
import styles from './works.module.scss';
import WorkList from '../../components/WorkList';
import datas from '../../utils/experience.json';

export default function WorkPage() {
    return (

    <div className={ styles.wrap }>
            <div className={ styles.title }>
                <h3>My Work</h3>
                <p>A collection of different things I have worked on.</p>
            </div>
        <WorkList dataSource={ datas.data } />
    </div>
    )
}
