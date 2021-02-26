import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/navigation';
import Banner from '../components/non-front-banner'
import AuthorImg from '../static/author/author.jpg'

const Author = (props) => {
    return(
        <>
            <Layout>
                <Helmet title="Author | Joaquin Ramos"/>
                <Nav pathExt={props.path}/>
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Joaquin Ramos</span>
                                </span>
                            </p>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Joaquín Ramos es pastor, maestro, mentor, motivador, plantador de iglesia, líder de pastores y entrenador. Tiene licencia de Ministro Ordenado por Las Iglesias de la Biblia Abierta. Está casado con Naomi Ramos y vive en Lacey, WA. Es padre de tres hijos, Esther, Benjamín and Daniel y abuelo de Josiah. La pasión de Joaquín es ver a hombres y mujeres conocer, entender y abrazar el llamado de Dios en sus vidas siendo amigo de su destino. Esto incluye el asistirlos especialmente en momentos cuando han caído poderlos levantar.
                            </p>

                        </article>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Author;