import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../static/author/author.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="wrapper-heading-content">
                        <h1>About the Author</h1>
                        <div className="grid-child" id="author-image-container">
                            <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                        </div>
                    </div>

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                            Joaquín Ramos es pastor, maestro, mentor, motivador, plantador de iglesia, líder de pastores y entrenador. Tiene licencia de Ministro Ordenado por Las Iglesias de la Biblia Abierta. Está casado con Naomi Ramos y vive en Lacey, WA. Es padre de tres hijos, Esther, Benjamín and Daniel y abuelo de Josiah.
                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Joaquin</span>
                            <span>Ramos</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>
                        <Link className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" to="/about-the-author">
                            Read More
                        </Link>
                    </div>
                    

                </div>
            </section>
        </>
    )
}

export default Author;