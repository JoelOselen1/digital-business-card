import Card from '../ui/Card';
import classes from './Main.module.css';

export default function Main(props){
  return (
    <Card>
    <main>
    <img src='./profile-picture.jpg' alt='centered-image' className={classes.image} />
    <div className={classes.info}>
    <h1>Joel Oselen</h1>
    <p className={classes.career}>Frontend Developer</p>
    <p>JoelOselen.website</p>
    <span>
    <button className={classes.emailBtn}>  <img src='./email-logo.png' className={classes.email} />Email </button>
    <button className={classes.linkedinBtn}>  <img src='./linkedin-logo.png' className={classes.linkedin} />linkedIn</button>
    </span>
      <h2>About</h2>
       <p>
         I am a frontend developer with a particular interest in making things simple and automating daily task. I try to keep up with security and best practices, and I am always looking for new things to learn.
       </p>
       <h3>Interests</h3>
    <p>Music scholar, blockchain development, Arbitrage, electrical service design, solar installation, internet fanatic.
    </p>
    </div>
    <footer className={classes.footer}>
    
    <img src='./twitter-logo.png' className={classes.twitter} />
    <img src='./facebook-logo.jpeg' className={classes.facebook} />
    <img src='./instagram-logo.jpeg' className={classes.instagram} />
    <img src='./github-logo.jpeg' className={classes.github} />
    </footer>
    
    </main>
    </Card>
    );
}