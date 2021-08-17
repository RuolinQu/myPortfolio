import React from 'react'
import styles from './skill.module.scss'

export default function SkillPage() {
    return (
        <div className={styles.skill_wrapper}>
            <div className={styles.left_box}>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>React-router</li>
                </ul>
                <ul>
                <li>Vue</li>
                    <li>node.js</li>
                    <li>WebPack</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>AWS</li>
                </ul>
                <ul>
                    <li>Jest</li>
                    <li>Testing-libray</li>
                    <li>Enzyme</li>
                    <li>Git</li>
                    <li>CI/CD</li>
                    <li>AWS</li>
                    <li>JSON</li>
                </ul>
                <ul>
                <li>SCSS</li>
                    <li>AntDesign</li>
                    <li>BootStrap</li>
                    <li>Material UI</li>
                </ul>
            </div>
            <div className={styles.right_box}>
                <img></img>
            </div>
        </div>
    )
}
