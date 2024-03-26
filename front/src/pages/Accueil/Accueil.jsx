import React from 'react';
import './Accueil.scss';
import CardService from '../../components/Card/CardService/CardService';
import Stats from '../../components/Stats/Stats';
import CardReview from '../../components/Card/CardReview/CardReview';

export default function Accueil() {
    return (
    <div class="main">
        <div className="hero" style={{backgroundImage: 'url("/landing.jpg")', height: "55vh"}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center">
                <div className="max-w-lg text-left">
                    <h1 className="mb-5 text-4xl font-semibold text-white">Prenez soin de vos animaux <br/> Trouvez un <span className='light-primary'>vétérinaire</span></h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div className="hero bg-primary pt-20 pb-20">
            <div className="hero-content text-center">
                <div className="content">
                    <h2 className="mb-5 text-3xl font-black text-white">
                        Veto'lib à votre service !    
                    </h2>
                    <div className="flex flex-col gap-20 pt-5">
                        <div className="flex flex-row flex-wrap justify-center gap-3">
                            <CardService title="VOS HORAIRES" icon="calendrier.svg" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, incidunt. Fugiat numquam quibusdam provident, doloremque impedit, fuga similique deserunt consectetur quasi atque quam consequatur? Dicta consectetur dolores ratione quibusdam ea."/>
                            <CardService title="PRES DE VOUS" icon="marqueur.svg" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, incidunt. Fugiat numquam quibusdam provident, doloremque impedit, fuga similique deserunt consectetur quasi atque quam consequatur? Dicta consectetur dolores ratione quibusdam ea."/>
                            <CardService title="AVIS VERIFIES" icon="star.svg" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, incidunt. Fugiat numquam quibusdam provident, doloremque impedit, fuga similique deserunt consectetur quasi atque quam consequatur? Dicta consectetur dolores ratione quibusdam ea."/>
                        </div>
                        <div className="flex flex-row justify-between align-center gap-3 ml-3 mr-3">
                            
                            <Stats number="Vetolib" text="en chiffre..."/>
                            <Stats number="20" text="Refuges"/>
                            <Stats number="900 000" text="Animaux"/>
                            <Stats number="30 000" text="Vétérinaires"/>
                            <Stats number="97%" text="D'avis positifs"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero pt-20 pb-20">
            <div className="hero-content text-center">
                <div className="content">
                    <div className='flex flex-row justify-center gap-5'>
                        <img src="/chokebar.jpg" alt="chokebar" className="w-1/2"/>
                        <div className="flex flex-col gap-5 justify-center">
                            <h2 className="text-3xl font-black">Ce chat est choqué de la qualité</h2>
                            <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi accusamus natus, magnam magni, facere repellendus eum ut recusandae aspernatur fuga assumenda voluptates consectetur quos quaerat earum minus laborum eius necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptates reprehenderit autem dicta ab laborum consequuntur quis fugit repudiandae porro, ut, totam inventore, iste esse perspiciatis modi quasi natus incidunt.</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        <div className="hero bg-primary pt-20 pb-20">
            <div className="hero-content text-center">
                <div className="content">
                    <h2 className="mb-5 text-3xl font-black text-white">
                        Vos avis comptent !  
                    </h2>
                    <div className="flex flex-row flex-wrap justify-center gap-3">
                        <CardReview name="Jean" review="                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga totam nesciunt numquam esse maiores, fugit assumenda accusamus vitae, alias quas facilis in placeat odit qui repellat soluta harum cumque perspiciatis." note="5" />
                        <CardReview name="Marie" review="                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga totam nesciunt numquam esse maiores, fugit assumenda accusamus vitae, alias quas facilis in placeat odit qui repellat soluta harum cumque perspiciatis." note="5" />
                        <CardReview name="Paul" review="                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga totam nesciunt numquam esse maiores, fugit assumenda accusamus vitae, alias quas facilis in placeat odit qui repellat soluta harum cumque perspiciatis." note="5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
