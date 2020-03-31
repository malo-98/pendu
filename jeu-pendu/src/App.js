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
        lettreUtilise : new Set(),
        etatMot : this.computeDisplay ,
    }

    generatedMot() {
        const index = Math.floor(Math.random() * (tabMots.length))
        return tabMots[index];
    }


    computeDisplay(motActuel, lettreUtilise) {
        return motActuel.replace(/\w/g, (lettre) => (lettreUtilise.has(lettreUtilise) ? lettre : '_'))
    }

    restart(){
        let {motActuel,  nbreEssai, lettreChoisi, lettreUtilise, etatMot}= this.state
        motActuel = this.generatedMot()
        nbreEssai = 0
        lettreChoisi = ''
        lettreUtilise = new Set()
        etatMot = this.computeDisplay
        this.setState({motActuel, nbreEssai ,lettreChoisi, lettreUtilise, etatMot})
    }

    handleLettre (lettre) {
        let {motActuel , nbreEssai, lettreChoisi, lettreUtilise, etatMot} = this.state
        lettreChoisi = lettre
        nbreEssai ++
        lettreUtilise.add(lettreChoisi)
        etatMot = this.computeDisplay(motActuel, lettreUtilise)
        this.setState({motActuel, nbreEssai, lettreChoisi, lettreUtilise, etatMot})
    }


    render() {
        const { motActuel, nbreEssai, lettreChoisi, lettreUtilise, etatMot} = this.state
        return (
            <div className="pendu">
                <button onClick={() => this.restart()}>Recommencer</button>
                <p>{lettreUtilise}</p>
                <NbreEssais nbreEssai={nbreEssai}/>
                <p className="display">{etatMot}</p>
                <p>{motActuel}</p>
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
