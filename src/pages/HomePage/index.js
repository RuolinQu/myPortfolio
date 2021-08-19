import React from 'react'
import styles from './Home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";

export default function HomePage() {
    return (
        <div className={styles.home_wrapper}>
            <div className={styles.left_box}>
                <FontAwesomeIcon icon={faCode} size="6x" />
                <p>Jay Qu</p>
                <div className={styles.typing_wrapper}>
                    <div className={styles.typing}>
                        <Typewriter
                            options={{
                                strings: [
                                "Senior Front-end Developer",
                                "React Web Developer",
                                "Open Source Contributor",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                    </div>
            </div>
            <div className={styles.right_box}>
                <p>I design applications, interactive websites.</p>
                <p>Front-end engineer with 5+ years of experience.</p>
                <p>Proficient with React, JavaScript, HTML5 and CSS3.</p>
                <p>Able to effectively self-manage.</p>
                <p>Collabrate as part of a productive team.</p>
            </div>
        </div>
    )
}
