import React from 'react'
import styles from './contact.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch,faMapMarkerAlt, faEnvelope, faPhoneSquare  } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_box}>
                <div><FontAwesomeIcon icon={faMapMarkerAlt } size="2x" /></div>
                <div>
                    <h3>Address</h3>
                    <p>21123 Whitfield pl,SterlingVA </p>
                    
                </div>
            </div>
            <div className={styles.contact_box}>
                <div>
                    <FontAwesomeIcon icon={faCodeBranch} size="2x" />
                </div>
                <div><h3>Github</h3>
                    <p>RuolinQu</p>
                </div>
            </div>
            <div className={styles.contact_box}>
                <div><FontAwesomeIcon icon={faEnvelope } size="2x" /></div>
                <div><h3>Email</h3>
                    <p>jayqu95@gmail.com</p>
                </div>
            </div>
            <div className={styles.contact_box}>
                <div>  <FontAwesomeIcon icon={faPhoneSquare } size="2x" /></div>
                <div><h3>Phone</h3>
                    <p>(732)-516-8047</p>
                </div>
            </div>
        </div>
    )
}
