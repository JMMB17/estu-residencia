import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ArriendoCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "1em 1em 1em 1em" }}>
      <CardMedia
        component="img"
        height="140"
        image="/casa.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Casa
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Casa amueblada en el centro de la ciudad, cerca de la universidad, con todos los servicios.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contactar</Button>
        <Button size="small">Agregar a favoritos</Button>
      </CardActions>
    </Card>
  );
}
