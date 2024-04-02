import './Parcours.scss';
const Parcours = () => {
    return (
        <section id="parcours" className="parcours">
            <h1 className="parcours__title">Parcours</h1>
                <section className="parcours__container">
                    <article className="parcours__box">
                        <h2 className="parcours__box-title">Formation</h2>
                            <div className="parcours__arrow1"></div>
                            <ul className="parcours__list">
                                <li className="parcours__box-text">Développeur Web & Web Mobile - Ecole Oclock - 2023/2024</li>
                                <p className="parcours__box-text">Titre professionnel de niveau 5 (Bac+2) </p>
                                <li className="parcours__box-text">Master 2 Economie - Toulouse School Of Management - 2012/2014</li>
                            </ul>
                    </article>
                    <article className="parcours__box">
                        <h2 className="parcours__box-title">Expériences professionnelles</h2>
                            <div className="parcours__arrow2"></div>
                            <ul className="parcours__list">
                                <li className="parcours__box-text"><strong>Adjointe Responsable Administratif et Financier</strong> - My American Market 2018/2023</li>
                                <li className="parcours__box-text"><strong>Comptable</strong> - Bonnefoy Immobilier 2017/2018</li>
                                <li className="parcours__box-text"><strong>Trésorière </strong>- Citya Immobilier 2016</li>
                                <li className="parcours__box-text"><strong>Chargée de mission</strong> - Fédération Française de Rugby 2014</li>
                                
                            </ul>
                    </article>
                </section >
        </section>
    )
    }

export default Parcours;