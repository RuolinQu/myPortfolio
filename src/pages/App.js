import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import HomePage from './HomePage';
import WorkPage from './WorkPage';
import EducationPage from './EducationPage';
import ProjectPage from './ProjectPage';
import ResumePage from './ResumePage';
import SkillPage from './SkillPage';
import ContactPage from './ContactPage';





function App(props) {
  const { location } = props;
  console.log(location)
  return (
    <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.header_nav}>
            <div className={styles.navleft}>
              <p >Bomber</p>
            </div>
            <div className={styles.navright}>
              <Link to ='/'><p className={location.pathname==="/"?styles.selected:null}>Home</p></Link>
              <Link to="/education"><p className={location.pathname==="/education"?styles.selected:null}>Education</p></Link>
              <Link to="/works"><p className={location.pathname==="/works"?styles.selected:null}>Experience</p></Link>
              <Link to="/project"><p className={location.pathname === "/project" ? styles.selected : null}>Projects</p></Link>
              <Link to="/skill"><p className={location.pathname==="/skill"?styles.selected:null}>Skills</p></Link>
              <Link to="/resume"><p className={location.pathname==="/resume"?styles.selected:null}>Resume</p></Link>
              <Link to="/contact"><p className={location.pathname==="/contact"?styles.selected:null}>Contact</p></Link>
          </div>
          </div>
      </header>
      <section className={styles.content}>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/education" exact component={EducationPage}/>
          <Route path="/works" exact component={WorkPage}/>
          <Route path="/project" exact component={ProjectPage}/>
          <Route path="/skill" exact component={SkillPage}/>
          <Route path="/resume" exact component={ResumePage}/>
          <Route path="/contact" exact component={ContactPage}/>
          {/* <Route path="/works:id">
            <WorkDetail />
          </Route> */}
        </Switch>
      </div>
      </section>
      <footer className={styles.footer}>
        <p><b>Ruolin Qu</b></p>
        <p>Antra.com</p>
      </footer>
      </div>
  );
}

export default withRouter(App);
