import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Missions from './Missions';

const SolarSystem = () => (
  <>
    <div div data-testid="solar-system">
      <Title headline="Planetas" />
      <section>
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </section>
    </div>
    <Missions />
  </>
);

export default SolarSystem;
