import "./About.scss";
import instagram from "../../assets/instagram.svg";
import camera from "../../assets/camera.jpg"
import piano from "../../assets/piano.jpg"
import sport from "../../assets/sport.jpg"
import games from "../../assets/games.jpg"

const About = () => {       
    return (
        <section id ="about" className='about'>
            <h1 className="about__title">A propos</h1>
                <div className="about__container">
                    <p className="about__container-text">Après avoir travaillé 10 ans dans le domaine de la gestion j'ai décidé de relever le défi du développement web. Mon parcours professionnel antérieur m'a apporté une rigueur organisationnelle et une capacité à résoudre des problèmes complexes, des atouts précieux dans le monde du développement.</p>

                    <p className="about__container-subtitle">Centres d'intérêt</p>
                    <div className="about__container-img">
                        <div className="img">
                            <div className="img__text">Photo</div>
                            <img className="img__picture" src={camera} alt="camera" />
                        </div>
                        <div className="img">
                            <div className="img__text">Piano</div>
                            <img className="img__picture" src={piano} alt="piano" />
                        </div>
                        <div className="img">
                            <div className="img__text">Sports</div>
                            <img className="img__picture" src={sport} alt="stadium" />
                        </div>
                        <div className="img">
                            <div className="img__text">Jeux de société</div>
                            <img className="img__picture" src={games} alt="games" />
                        </div>
                    </div>
                </div>
            </section>
      
    )
}

export default About;   