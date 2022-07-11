import React from 'react';

const Tile = ({background, callback, mouseIsPressed}) => {

  return <div
    onMouseEnter={() => {
      if (mouseIsPressed) callback()
    }}
    onMouseDown={() => callback()}
    style={{
      aspectRatio: '1/1',
      background: background,
      border: '1px solid black'
    }}
  ></div>
}

export default Tile;
