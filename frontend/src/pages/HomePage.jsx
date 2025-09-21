import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import ServicoCard from '../components/ServicoCard';
import ServicoForm from '../components/ServicoForm';
import { getServicos, createServico } from '../services/api';

const HomePage = () => {
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);

  const fetchServicos = async () => {
    try {
      const data = await getServicos();
      setServicos(data);
    } catch (error) {
      console.error('Erro ao carregar serviços:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicos();
  }, []);

  const handleCreateServico = async (servicoData) => {
    try {
      await createServico(servicoData);
      fetchServicos();
    } catch (error) {
      console.error('Erro ao criar serviço:', error);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" component="h1">
          Serviços Públicos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFormOpen(true)}
        >
          Novo Serviço
        </Button>
      </Box>

      <Grid container spacing={4}>
        {servicos.map((servico) => (
          <Grid item key={servico.id} xs={12} sm={6} md={4}>
            <ServicoCard servico={servico} />
          </Grid>
        ))}
      </Grid>

      <ServicoForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={handleCreateServico}
      />
    </Container>
  );
};

export default HomePage;