import React from 'react';
import './Accueil.scss';
import CardService from '../../components/Card/CardService/CardService';
import Stats from '../../components/Stats/Stats';
import CardReview from '../../components/Card/CardReview/CardReview';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function Accueil() {

    return (
    <div className="main">
        <div className="hero" style={{backgroundImage: 'url("/landing.jpg")', height: "55vh"}}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content max-w-4xl w-full text-center">
                <div className="text-left w-full flex flex-col justify-center items-left">
                    <h1 className="mb-5 text-4xl font-semibold text-white">Prenez soin de vos animaux <br/> Trouvez un <span className='light-primary'>vétérinaire</span></h1>
                    <div className="flex flex-row">
                        <Input type="text" placeholder="Nom, ville..." className="input-component-left w-full" shadow={'false'}/>
                        <Input type="text" placeholder="Quand" className="input-component-right w-full" shadow={'false'} submitButton={() => { alert('Test') }}/>
                    </div>
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
                        <div className="flex flex-row flex-wrap justify-between align-center gap-3 ml-3 mr-3">
                            
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
                    <div className='flex lg:flex-row flex-col justify-center items-center gap-5'>
                        <img src="/chokebar.jpg" alt="chokebar" className="w-1/2"/>
                        <div className="flex flex-col flex-wrap gap-5 justify-center">
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
                    <div className="flex flex-row flex-wrap justify-center gap-10">
                        <CardReview name="Jérémy Z." review="Je suis extrêmement satisfait de mon expérience avec ce site dédié aux vétérinaires, c'est tout simplement révolutionnaire ! La plateforme offre une solution complète et efficace pour la gestion des rendez-vous et des soins de nos précieux compagnons à quatre pattes." note="5" />
                        <CardReview name="Marie" review="Ce site dédié aux vétérinaires est tout simplement un incontournable pour tous les propriétaires d'animaux. J'ai été agréablement surpris par la simplicité d'utilisation et l'efficacité de ses fonctionnalités." note="5" />
                        <CardReview name="Paul" review="Dès la première utilisation, j'ai été impressionné par la fluidité de la plateforme. La recherche d'un vétérinaire disponible a été un jeu d'enfant, et la prise de rendez-vous s'est déroulée sans le moindre accroc. C'est un soulagement de savoir que je peux compter sur cette plateforme pour gérer efficacement les rendez-vous." note="5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
