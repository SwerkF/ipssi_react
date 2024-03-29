import {Link} from 'react-router-dom'

const Cookies = () => {
    return (
        <>
            <h3 className="text-2xl py-2 font-semibold">
                Politique des cookies
            </h3>
            <p className="py-y2">
                Dernière mise à jour :{' '}
                <span className="font-bold">29/03/2024</span>
            </p>
            <p className="py-y2">
                <span className="font-bold text-primary">Véto&apos;Lib</span>{' '}
                (&quot;nous&quot;, &quot;notre&quot; ou &quot;nos&quot;) utilise
                des cookies sur le site web{' '}
                <span className="font-bold text-primary">Véto&apos;Lib</span>{' '}
                (le &quot;Service&quot;). En utilisant le Service, vous
                consentez à l&apos;utilisation de cookies.
            </p>
            <p className="py-y2">
                Notre politique de cookies explique ce que sont les cookies,
                comment nous les utilisons, comment les tiers avec lesquels nous
                pouvons collaborer peuvent les utiliser sur le Service, vos
                choix concernant les cookies et plus d&apos;informations sur les
                cookies.
            </p>
            <p className="py-y2 font-bold">Que sont les cookies ?</p>
            <p className="py-y2">
                Les cookies sont de petits fichiers texte placés sur votre
                appareil lorsque vous visitez un site web. Ils sont largement
                utilisés pour permettre au site web de fonctionner correctement
                et pour fournir des informations aux propriétaires du site.
            </p>
            <p className="py-y2">
                Les cookies peuvent être &quot;persistants&quot; ou &quot;de
                session&quot;. Les cookies persistants restent sur votre
                appareil même après avoir fermé votre navigateur, tandis que les
                cookies de session sont supprimés dès que vous fermez votre
                navigateur.
            </p>
            <p className="py-y2 font-bold">
                Comment utilisons-nous les cookies ?
            </p>
            <p className="py-y2">
                Lorsque vous utilisez et accédez au Service, nous pouvons placer
                un certain nombre de cookies dans votre appareil. Nous utilisons
                des cookies de session et des cookies persistants pour les
                finalités suivantes :
            </p>
            <ul className="list-disc list-inside">
                <li>Pour fournir et maintenir notre Service</li>
                <li>
                    Pour authentifier les utilisateurs et prévenir les fraudes
                </li>
                <li>Pour stocker vos préférences et paramètres</li>
                <li>Pour analyser l&apos;utilisation du Service</li>
                <li>
                    Pour faciliter les interactions avec les réseaux sociaux
                </li>
            </ul>
            <p className="py-y2 font-bold">
                Quels types de cookies utilisons-nous ?
            </p>
            <p className="py-y2">
                Il existe plusieurs types de cookies utilisés sur notre Service
                :
            </p>
            <ul className="list-disc list-inside">
                <li>
                    Cookies essentiels : Ces cookies sont nécessaires au
                    fonctionnement de notre site web. Ils incluent, par exemple,
                    les cookies qui vous permettent de vous connecter à des
                    zones sécurisées de notre site web, d&apos;utiliser un
                    panier d&apos;achat ou de bénéficier de services de paiement
                    en ligne.
                </li>
                <li>
                    Cookies de performance : Ces cookies nous permettent de
                    reconnaître et de compter le nombre de visiteurs sur notre
                    site web et de voir comment les visiteurs se déplacent sur
                    notre site web. Cela nous aide à améliorer la manière dont
                    notre site web fonctionne, par exemple, en nous assurant que
                    les utilisateurs trouvent facilement ce qu&apos;ils
                    cherchent.
                </li>
                <li>
                    Cookies de fonctionnalité : Ces cookies sont utilisés pour
                    reconnaître lorsque vous revenez sur notre site web. Cela
                    nous permet de personnaliser notre contenu pour vous, de
                    vous accueillir par votre nom et de mémoriser vos
                    préférences (comme la langue ou la région que vous avez
                    sélectionnée).
                </li>
                <li>
                    Cookies de ciblage : Ces cookies enregistrent votre visite
                    sur notre site web, les pages que vous avez visitées et les
                    liens que vous avez suivis. Nous utiliserons ces
                    informations pour rendre notre site web et la publicité
                    affichée sur lui plus pertinents à vos intérêts. Nous
                    pouvons également partager ces informations avec des tiers à
                    cette fin.
                </li>
            </ul>
            <p className="py-y2 font-bold">
                Quels sont vos choix concernant les cookies ?
            </p>
            <p className="py-y2">
                Si vous souhaitez supprimer les cookies ou demander à votre
                navigateur web de supprimer ou de refuser les cookies, veuillez
                consulter les pages d&apos;aide de votre navigateur web.
            </p>
            <p className="py-y2">
                Veuillez noter cependant que si vous supprimez les cookies ou
                refusez de les accepter, vous pourriez ne pas être en mesure
                d&apos;utiliser toutes les fonctionnalités que nous proposons,
                vous pourriez ne pas être en mesure de stocker vos préférences,
                et certaines de nos pages pourraient ne pas s&apos;afficher
                correctement.
            </p>
            <p className="py-y2 font-bold">
                Où pouvez-vous trouver plus d&apos;informations sur les cookies
                ?
            </p>
            <p className="py-y2">
                Vous pouvez en savoir plus sur les cookies et sur la manière de
                les contrôler en consultant le guide d&apos;aide de votre
                navigateur ou en visitant{' '}
                <a className="link link-primary" href="www.aboutcookies.org">
                    www.aboutcookies.org
                </a>
                .
            </p>
            <p className="py-y2 font-bold">Comment nous contacter</p>
            <p className="py-y2">
                Si vous avez des questions sur notre utilisation des cookies,
                vous pouvez nous contacter par e-mail :{' '}
                <a
                    className="link link-primary"
                    href="mailto:contact@vetolib.fr">
                    contact@vetolib.fr
                </a>
            </p>
        </>
    )
}

export default Cookies
