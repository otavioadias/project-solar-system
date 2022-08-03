import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

const SolarSystem = () => (
  <div div data-testid="solar-system" id="solar-system">
    <Title headline="Planetas" />
    <section className="solar-system">
      {planets.map((planet) => (
        <PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />
      ))}
    </section>
  </div>
);

export default SolarSystem;
