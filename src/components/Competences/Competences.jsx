import './Competences.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import balise from '../../assets/balise.svg';
import database from '../../assets/database.svg';
import { useEffect } from 'react';


const Competences = () => {  

    const ratio = .2
    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: ratio,
        };
    
        const handleIntersect = (entries, observer) => {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }else {
              console.log('out of view');
            }
            
          });
        };

    const  observer = new IntersectionObserver(handleIntersect, options);
    const revealElement = document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r);
    });

    if (revealElement) {
        observer.observe(revealElement);
      }
  
      return () => {
        if (revealElement) {
          observer.unobserve(revealElement);
        }
      };
    }, []); 

    return (
        <section id="competences" className="competences">
            <h1 className="competences__title">Compétences</h1>
            <img className="competences__logo-front" src={balise} alt="logo balise" />
            <div className="competences__container reveal">
                <article className="competences__article">
                    <p className="competences__name">HTML5</p>
                    <ProgressBar progress={85}/>
                </article>
                <article className="competences__article">
                    <p className="competences__name">CSS</p>
                    <ProgressBar progress={85}/>
                </article>
                <article className="competences__article">
                    <p className="competences__name">JavaScript</p>
                    <ProgressBar progress={70}/>
                </article>
                <article className="competences__article">
                    <p className="competences__name">Ajax</p>
                    <ProgressBar progress={70}/>
                </article>
                <article className="competences__article">
                    <p className="competences__name">React</p>
                    <ProgressBar progress={75} />
                </article>
                <article className="competences__article">
                    <p className="competences__name">Sass</p>
                    <ProgressBar progress={40}/>
                </article>
            </div>
            <img className="competences__logo-back" src={database} alt="logo database" />
            <div className="competences__container-back reveal">
                <article className="competences__article">
                    <p className="competences__name">PostgreSQL</p>
                    <ProgressBar progress={60}/>
                </article>
                <article className="competences__article">
                    <p className="competences__name">MongoDB</p>
                    <ProgressBar progress={25}/>
                </article>
                <article className="competences__article">
                    <p className="competences__name">SEO</p>
                    <ProgressBar progress={50}/>
                </article>
                <article className="competences__article">
                    <p className="competences__name">API REST</p>
                    <ProgressBar progress={70}/>
                </article>
            </div>
            <h1 className="competences__title">Autres compétences</h1>    
            <div className="competences__container reveal">
                <article className="competences__container-box">
                    <p className="competences__name">Anglais  <p className='competences__content'>Niveau B2</p></p>
                    <p className="competences__name">Espagnol  <p className='competences__content'>Niveau B2</p></p>
                </article>
                <article className="competences__container-box">
                    <p className="competences__name">Logiciels pratiqués: <p className='competences__content'>Prestashop, Magento, Odoo</p></p>
                </article>
                <article className="competences__container-box">
                    <p className="competences__name">Autres : <p className='competences__content'>Windows, Mac OS, GitHub, VsCode, Insomnia</p></p>
                </article>
                <article className="competences__container-box">
                    <p className="competences__name">Méthodes de travail : <p className='competences__content'>Agile, Scrum, Kanban</p></p>
                </article>
                <article className="competences__container-box">
                    <p className="competences__name">Savoir-être : <p className='competences__content'>Organisation, rigueur, capacité d'adaptation</p></p>
                </article>
            </div>
        </section>
    );
    }   

export default Competences;
