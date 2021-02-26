import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Nav from '../components/navigation'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/hardcover1.png'



const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'joaquin-ramos',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="Book | Joaquin Ramos"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Por Segunda Vez`,
                                spanFirst: `Esperanza Para el Descarriado`,
                                imgSrc: Book1,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                        ¿Qué es un descarriado?
                                        </p>

                                        <p>
                                        ¿Tiene él o ella la oportunidad de salvación?
                                        </p>

                                        <p>
                                        ¿Qué dice la Biblia acerca de esto?
                                        </p>

                                        <p>
                                        Estas y muchas más son las preguntas que se discuten en este libro. Este es un llamado a reconocer tantos que han sido parte del grupo de creyentes llamado "iglesia" y que por alguna razón u otra se han separado del Camino. Ellos también están en el corazón de Dios y es tiempo de recibirlos de nuevo como parte de Su redil.
                                        </p>
                                    `,

                                ebooks: {
                                    amazon: 'https://www.amazon.com/Por-Segunda-Vez-Esperanza-Descarriado-ebook/dp/B082VM5LKM/',
                                    // stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/por-segunda-vez-joaquin-ramos/1135622813?ean=9781643458328'
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/dp/1643458310/',
                                    barnes: 'https://www.barnesandnoble.com/w/por-segunda-vez-joaquin-ramos/1135622813',
                                    booksamillion: 'https://www.booksamillion.com/p/Por-Segunda-Vez/Joaquin-Ramos/9781643458311',
                                },
                                hardcover: {
                                    // amazon: '',
                                    // barnes: '',
                                    // booksamillion: '',
                                }
                            }}
                        />

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;