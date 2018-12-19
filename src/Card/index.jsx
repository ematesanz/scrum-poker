import * as React from 'react';

export interface Props {
  name: string;
}

function Card({ name }: Props) {
  return (
    <div className="card">
      { name }
    </div>
  )
}

export default Card;