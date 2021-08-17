import React from 'react'
import styles from './project.module.scss'

export default function ProjectCard(props) {
    const { ProjectData } = props
    console.log(ProjectData)
    return (
        <div className={styles.project_wrapper}>
            <section>
                <header>{ProjectData.header}</header>
                <img src={ProjectData.src}></img>
            </section>
        </div>
    )
}
