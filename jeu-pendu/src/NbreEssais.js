import PropTypes from 'prop-types'
import React from 'react'

const NbreEssais = ({nbreEssai}) => <div className="nbreEssai">{nbreEssai}</div>

NbreEssais.propTypes = {
    nbreEssai: PropTypes.number.isRequired,
}

export default NbreEssais

