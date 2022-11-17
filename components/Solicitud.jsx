import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Solicitud() {
  return (
    <Card sx={{ maxWidth: 450 }} style={{ margin: "1em 1em 1em 1em" }}>
      <CardMedia
        component="img"
        height="140"
        image="/casa.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Solicitud
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Diego valentin desea adquirir el arriendo de la vivienda ubicada en la calle 12 # 12-12
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contactar</Button>
        <Button size="small">Agregar a favoritos</Button>
      </CardActions>
    </Card>
  );
}