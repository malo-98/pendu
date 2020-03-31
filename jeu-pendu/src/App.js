import React, {Component} from 'react';
import './App.css';
import shuffle from 'lodash.shuffle'
import PropTypes from 'prop-types'
import NbreEssais from "./NbreEssais";

var tabMots = ["Malo", "Alix", "Bibou", "Tableau", "Fun", "Mistrale"]
const LETTRES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

class App extends Component{
    state = {
        motActuel: this.generatedMot(),
        nbreEssai: 0,
        lettreChoisi: '',
    }

    generatedMot() {
        const index = Math.floor(Math.random() * (tabMots.length))
        return tabMots[index];
    }

    computeDisplay = function (phrase, usedLetters) {
        return phrase.replace(/\w/g, (letter) => (usedLetters.has(letter) ? letter : '_'))
    }

    handleLettre (lettre) {
        let {motActuel , nbreEssai, lettreChoisi} = this.state
        lettreChoisi = lettre
        this.setState({motActuel, nbreEssai, lettreChoisi})
    }

    render() {
        const { motActuel, nbreEssai, lettreChoisi} = this.state
        return (
            <div className="pendu">
                <NbreEssais nbreEssai={nbreEssai}/>
                <div>Lettre cliqué : {lettreChoisi}</div>
                <p className="lettres">
                    {LETTRES.map((lettre) => (
                        <button
                            key={lettre}
                            onClick={() => this.handleLettre(lettre)}
                        >
                            {lettre}
                        </button>
                    ))}
                </p>
            </div>
        )

    }
}
export default App;
