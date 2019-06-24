import React from 'react';

import Character from './Character';

const CharacterList = props => {
  console.log(`props in characterlist`, props);
  return (
    <ul>
      {props.characters.map(character => {
        console.log(`char inside map from characterlist`, character);
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
