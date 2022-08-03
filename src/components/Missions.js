import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

const Missions = () => (
  <div data-testid="missions">
    <Title headline="Missões" />
    <section className="missions-card">
      {missions.map((planet) => (
        <MissionCard
          key={ planet.name }
          name={ planet.name }
          year={ planet.year }
          country={ planet.country }
          destination={ planet.destination }
        />
      ))}
    </section>
  </div>
);

export default Missions;
