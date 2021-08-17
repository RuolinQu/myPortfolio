import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import styles from './project.module.scss'



export default function ProjectPage() {
    return (
        <div className={styles.project_wrapper}>
            <   ProjectCard
                ProjectData={{
                    src: "https://github.com/DongZiyuan/DongZiyuan.github.io/blob/master/static/img/projects/p1.jpg?raw=true",
                    header: "sadasd"
                }}
            />
            <   ProjectCard
                ProjectData={{
                    src: "https://github.com/DongZiyuan/DongZiyuan.github.io/blob/master/static/img/projects/p1.jpg?raw=true",
                    header: "sadasd"
                }}
            /><   ProjectCard
            ProjectData={{
                src: "https://github.com/DongZiyuan/DongZiyuan.github.io/blob/master/static/img/projects/p1.jpg?raw=true",
                header: "sadasd"
            }}
        />
        </div>
    )
}
