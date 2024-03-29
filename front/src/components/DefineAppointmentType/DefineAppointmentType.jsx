import React from 'react'
import './DefineAppointmentType.scss'

export default function
    () {
    const id = 'dc67f5e9-d1f6-4ba1-9b16-b0eaf526421h';

    const [consultation, setConsultation] = useState({
        type: '',
        prix: 0
    });

    const handleSelect = (e) => {
        const selectedOption = e.target.value;
        let prix = 0;

        switch (selectedOption) {
            case 'ControleGeneral':
                prix = 50;
                break;
            case 'Vaccination':
                prix = 40;
                break;
            case 'Comportement':
                prix = 60;
                break;
            case 'Symptomes':
                prix = 70;
                break;
            case 'Preventive':
                prix = 55;
                break;
            case 'ExamenPreoperatoire':
                prix = 75;
                break;
            case 'SuiviPostOperatoire':
                prix = 65;
                break;
            case 'NettoyageDentaire':
                prix = 80;
                break;
            case 'GestionDouleur':
                prix = 70;
                break;
            case 'ConsultationMaladiesChroniques':
                prix = 75;
                break;
            case 'ConsultationAllergies':
                prix = 65;
                break;
            case 'GestionPoidsNutrition':
                prix = 60;
                break;
            case 'ConsultationOculaire':
                prix = 70;
                break;
            case 'ConsultationInfections':
                prix = 65;
                break;
            case 'ConsultationReproduction':
                prix = 85;
                break;
            case 'BlessuresTraumatiques':
                prix = 75;
                break;
            case 'TestsDiagnostiques':
                prix = 90;
                break;
            case 'ConseilsParasites':
                prix = 55;
                break;
            case 'SantePublique':
                prix = 45;
                break;
            case 'CertificatsSante':
                prix = 50;
                break;
            default:
                prix = 0;
        }

        setConsultation({
            type: selectedOption,
            prix: prix
        });
    };

    return (
        <div>
            <select onChange={handleSelect}>
                <option value="">Sélectionnez un type de consultation</option>
                <option value="ControleGeneral">Contrôle général de santé - $50</option>
                <option value="Vaccination">Vaccination - $40</option>
                <option value="Comportement">Consultation pour des problèmes de comportement - $60</option>
                <option value="Symptomes">Consultation pour des symptômes spécifiques - $70</option>
                <option value="Preventive">Consultation préventive pour les jeunes animaux - $55</option>
                <option value="ExamenPreoperatoire">Examen préopératoire (avant une chirurgie) - $75</option>
                <option value="SuiviPostOperatoire">Suivi post-opératoire - $65</option>
                <option value="NettoyageDentaire">Nettoyage dentaire et examen bucco-dentaire - $80</option>
                <option value="GestionDouleur">Consultation pour la gestion de la douleur - $70</option>
                <option value="ConsultationMaladiesChroniques">Consultation de suivi pour des maladies chroniques - $75</option>
                <option value="ConsultationAllergies">Consultation pour des allergies ou des affections cutanées - $65</option>
                <option value="GestionPoidsNutrition">Consultation pour la gestion du poids et de la nutrition - $60</option>
                <option value="ConsultationOculaire">Consultation pour des problèmes oculaires - $70</option>
                <option value="ConsultationInfections">Consultation pour des infections - $65</option>
                <option value="ConsultationReproduction">Consultation pour des questions de reproduction - $85</option>
                <option value="BlessuresTraumatiques">Consultation pour des blessures traumatiques - $75</option>
                <option value="TestsDiagnostiques">Consultation pour des tests diagnostiques - $90</option>
                <option value="ConseilsParasites">Consultation pour des conseils sur les parasites externes et internes - $55</option>
                <option value="SantePublique">Consultation pour des questions de santé publique - $45</option>
                <option value="CertificatsSante">Consultation pour des certificats de santé - $50</option>
            </select>

            <p>Prix sélectionné : ${consultation.prix}</p>
        </div>
    );

}
