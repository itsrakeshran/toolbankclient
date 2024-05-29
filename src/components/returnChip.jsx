import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const handleClick=()=>{
    window.alert("Return Sucess Full");
}


export default function Return() {
//   const handleClick = () => {
//     console.info('You clicked the Chip.');
//   };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Return" onClick={handleClick} />
    </Stack>
  );
}