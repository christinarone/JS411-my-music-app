import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function BasicSwitches({state,setState}) {
    const handleChange =()=>{
        setState(!state)
    }
  return (
    <div>
      <Switch checked={state} onChange={handleChange} />
    </div>
  );
}
