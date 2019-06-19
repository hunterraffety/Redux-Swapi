import React from 'react';

const Character = props => {
  console.log(`character.js props`, props);
  return <li>My good sirs, why not show up? ---> {props.character.name}</li>;
};

export default Character;
