import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getServicos = async () => {
  const response = await api.get('/servicos');
  return response.data;
};

export const createServico = async (servicoData) => {
  const response = await api.post('/servicos', servicoData);
  return response.data;
};

export const updateServico = async (id, servicoData) => {
  const response = await api.put(`/servicos/${id}`, servicoData);
  return response.data;
};

export const deleteServico = async (id) => {
  const response = await api.delete(`/servicos/${id}`);
  return response.data;
};