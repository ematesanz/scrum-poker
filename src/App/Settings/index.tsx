import * as React from 'react';

export interface Props {
  name: string;
}

function Settings({ name }: Props) {
  return (
    <div className="card">
      { name }
    </div>
  )
}

export default Settings;