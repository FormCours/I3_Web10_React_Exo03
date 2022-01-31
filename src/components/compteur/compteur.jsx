import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './compteur.module.css';

const Compteur = (props) => {
    // Récuperation de la valeur du "step" danes les props.
    const {step} = props;

    // Création d'une variable d'etat, avec une valeur initial de 0
    const [count, setCount] = useState(0);

    // Création les méthodes d'action
    const handleIncr = () => {
        setCount(c => c + step)
    }

    const handleReset = () => {
        setCount(0);
    }

    // Création d'un string avec les classnames necessaire (via condition)
    const styleCompteur = classNames({
        [style.textSize] : true,
        [style.textReset]: count === 0
    });
    // Equivalent à ↓
    // const styleCompteur = `${(count === 0) ? style.textReset : ''} ${style.textSize}`


    // Rendu JSX du composant
    return (
        <div>
            <p className={styleCompteur}>Le compteur est à {count}</p>
            <div>
                {/* Binding de l'action à effectuer: Méthodé dédiée VS Fonction créer dans le JSX*/}
                <button onClick={handleIncr}>+ {step}</button>
                <button onClick={() => setCount(c => c - step)}>- {step}</button>
            </div>

            {/* Utilisation de l'operateur "&&". Equivalent à une ternaire avec uniquement la contition "vrai" en JSX */}
            {(count !== 0) && (
                <button onClick={handleReset}>Reset</button>
            )}
        </div>
    );
};

Compteur.defaultProps = {
    step: 1
};

Compteur.propTypes = {
    step: PropTypes.number
}

export default Compteur;