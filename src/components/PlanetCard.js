import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="containerPlanet">
        <section data-testid="planet-card" id="planet-card">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className="planet-image"
            id={ planetName }
          />
        </section>
        <section className="nameCard">
          <p data-testid="planet-name" className="planet-name">{planetName}</p>
        </section>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
