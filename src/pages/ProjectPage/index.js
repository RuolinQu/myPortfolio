import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import styles from './project.module.scss'

import p1 from '../../assets/img//projects/p1.jpeg'
import p2 from '../../assets/img//projects/p2.jpeg'
import p3 from '../../assets/img//projects/p3.jpeg'
import p4 from '../../assets/img//projects/p4.jpeg'
import p5 from '../../assets/img//projects/p5.jpeg'
import p7 from '../../assets/img//projects/p7.jpeg'



export default function ProjectPage() {
    return (
        <div className={styles.project_wrapper}>
            <   ProjectCard
                ProjectData={{
                    src: p1,
                    header: "Full Stack Blog Management App"
                }}
            />
            <   ProjectCard
                ProjectData={{
                    src: p2,
                    header: "Bomber UI Library"
                }}
            /
            ><ProjectCard
            ProjectData={{
                src: p3,
                header: "CNN-based Colorization"
            }}
            />
             <ProjectCard
                ProjectData={{
                    src: p4,
                    header: "Muti-agents Based on RL"
                }}
            />
            <ProjectCard
                ProjectData={{
                    src: p5,
                    header: "GAIL research"
                }}
            />
            <ProjectCard
                ProjectData={{
                    src: p7,
                    header: "Stock and Backing System "
                }}
            />
        </div>
    )
}
