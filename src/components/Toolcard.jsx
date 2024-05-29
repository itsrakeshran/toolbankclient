import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


export default function Toolcard({data}) {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant='h5'>{data.title}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {data.toolid} | {data.category}  
        </Typography>
        {
            data.quantity <= 0?<Chip label="Out of Stock" color="warning" />
            :<Chip label="available" color="success" />
        }
      </CardContent>
    </Card>
  );
}
