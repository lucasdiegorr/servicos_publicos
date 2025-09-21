import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ServicoCard({ servico, onDelete }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {servico.nome}
        </Typography>
        <Typography>
          {servico.descricao}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Categoria: {servico.categoria}
        </Typography>
      </CardContent>
      <div style={{ padding: '16px' }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              component="a"
              href={servico.link_site}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
            >
              Site
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              component="a"
              href={servico.link_chat}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              fullWidth
            >
              Chat
            </Button>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}