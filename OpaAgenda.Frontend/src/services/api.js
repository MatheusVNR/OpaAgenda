const API_URL = 'https://localhost:5282/api/agendamento';

export const getAgendamentos = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getAgendamentoById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createAgendamento = async (agendamento) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(agendamento),
  });
  return await response.json();
};

export const updateAgendamento = async (id, agendamento) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(agendamento),
  });
  return await response.json();
};

export const deleteAgendamento = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
