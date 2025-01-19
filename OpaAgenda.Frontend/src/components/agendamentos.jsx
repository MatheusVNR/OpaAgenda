import React, { useState, useEffect } from 'react';
import { getAgendamentos, createAgendamento, updateAgendamento, deleteAgendamento } from '../services/api';

const Agendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [novoAgendamento, setNovoAgendamento] = useState({ nome: '', data: '' });

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const data = await getAgendamentos();
      setAgendamentos(data);
    };
    fetchAgendamentos();
  }, []);

  const handleCreate = async () => {
    const created = await createAgendamento(novoAgendamento);
    setAgendamentos([...agendamentos, created]);
    setNovoAgendamento({ nome: '', data: '' });
  };

  const handleDelete = async (id) => {
    await deleteAgendamento(id);
    setAgendamentos(agendamentos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Agendamentos</h2>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>
            {agendamento.nome} - {new Date(agendamento.data).toLocaleString()}
            <button onClick={() => handleDelete(agendamento.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <h3>Criar Agendamento</h3>
      <input
        type="text"
        placeholder="Nome"
        value={novoAgendamento.nome}
        onChange={(e) => setNovoAgendamento({ ...novoAgendamento, nome: e.target.value })}
      />
      <input
        type="datetime-local"
        value={novoAgendamento.data}
        onChange={(e) => setNovoAgendamento({ ...novoAgendamento, data: e.target.value })}
      />
      <button onClick={handleCreate}>Criar</button>
    </div>
  );
};

export default Agendamentos;
