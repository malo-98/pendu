import React, {Component} from 'react';
import './App.css';
import shuffle from 'lodash.shuffle'
import PropTypes from 'prop-types'
import NbreEssais from "./NbreEssais";

var tabMots = ["MALO", "ALIX", "BIBOU", "TABLEAU", "FUN", "MISTRALE"]
const LETTRES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')


class App extends Component {
    state = {
        motActuel: this.generatedMot(),
        nbreEssai: 0,
        lettreChoisi: '',
        lettreUtilise: new Set(),
        etatMot: this.computeDisplay,
        won : false
    }

    generatedMot() {
        const index = Math.floor(Math.random() * (tabMots.length))
        return tabMots[index];
    }


    restart() {
        let {motActuel, nbreEssai, lettreChoisi, lettreUtilise, etatMot, won} = this.state
        motActuel = this.generatedMot()
        nbreEssai = 0
        lettreChoisi = ''
        lettreUtilise = new Set()
        etatMot = this.computeDisplay
        won = false
        this.setState({motActuel, nbreEssai, lettreChoisi, lettreUtilise, etatMot, won})
    }

    handleLettre(lettre) {
        let {motActuel, nbreEssai, lettreChoisi, lettreUtilise, etatMot} = this.state
        lettreChoisi = lettre
        nbreEssai++
        lettreUtilise.add(lettreChoisi)
        etatMot = computeDisplay(motActuel, lettreUtilise)
        const won = !etatMot.includes('_')
        this.setState({motActuel, nbreEssai, lettreChoisi, lettreUtilise, etatMot, won})
    }


    render() {
        const {motActuel, nbreEssai, lettreChoisi, lettreUtilise, etatMot, won} = this.state
        return (
            <div className={`pendu ${(won && 'won') || ''}`}>
                <p className="display">{etatMot}</p>
                <p className="lettres">
                    {won ? (
                        <button className="replay" onClick={() => this.restart()}>Recommencer</button>
                    ) : (
                        LETTRES.map((lettre) => (
                            <button
                                key={lettre}
                                onClick={() => this.handleLettre(lettre)}
                            >
                                {lettre}
                            </button>
                        ))
                    )}
                </p>
                <NbreEssais nbreEssai={nbreEssai}/>
                <div> Lettre utilisée : <p>{lettreUtilise}</p></div>
                <div>Lettre cliqué : {lettreChoisi}</div>
            </div>
        )

    }
}
function computeDisplay(phrase, usedLetters) {

    return phrase.replace(
        /\w/g,

        (letter) => (usedLetters.has(letter) ? letter : '_')
    )
}
export default App;
