import React from 'react'
import styles from './education.module.scss'

import Rutgers from '../../assets/img/Rutgers.png'
import UESTC from '../../assets/img/UESTC.jpeg'

export default function EducationPage() {
    return (
        <div className={ styles.wrapper }>
            <div className={styles.boxes}>
                <article className={styles.left_box}>
                    <img src={Rutgers}></img>
                    <p2>Rutgers Univerisity</p2>
                    <br />
                    <br/>
                    <p3>Master of Science in Computer Engeineering</p3>
                    <br/>
                    <p3>2018 Sep - 2021 May</p3>
                    <ul>
                        <li>Deep Learning</li>
                        <li>Computer Visions</li>
                        <li>Computer Architecture</li>
                        <li>Artificial Intelligence</li>
                        <li>Data Structures and Algorithms</li>
                    </ul>
                </article>
                <article>
                     <img src={UESTC}></img>
                    <p2>Univerisity of Electronic Science And Technology of China</p2>
                    <br />
                    <br/>
                    <p3>Bachelor of Science in Applied Physics</p3>
                    <br/>
                    <p3>2014 Sep - 2018 Sep</p3>
                    <ul>
                        <li>Data Structure</li>
                        <li>Operating System</li>
                        <li>Computer Networking</li>
                        <li>Linear Algebra</li>
                        <li>Principles of Computer Organization</li>
                    </ul>
                </article>
            </div>                       
    
    </div>
    )
}
