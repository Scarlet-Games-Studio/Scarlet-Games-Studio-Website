import React, { useState } from 'react';
import './formulario.css';

const Formulary = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [proposalType, setProposalType] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('proposalType', proposalType);
    formData.append('message', message);
    if (file) formData.append('file', file); // Adiciona o arquivo, se houver
  
    try {
      const response = await fetch('http://localhost:5000/submit-proposal', {
        method: 'POST',
        body: formData, // Envia os dados do formulário e o arquivo
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Proposta enviada com sucesso!');
      } else {
        alert(data.error || 'Erro ao enviar a proposta.');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar a proposta. Tente novamente.');
    }
  };
  
  return (
    //<!--_______________SECTION 1 ONE__________________-->
    <div>
      <form className='formulary-dad' onSubmit={handleSubmit}>
        <h2>Envie sua Proposta</h2>

        <label  htmlFor="name"className='label-form'>Nome Completo <span className="required ">*</span></label>
        <input className='input-form'
          type="text" 
          id="name" 
          name={name} 
          onChange={(e) => setName(e.target.value)}
          //placeholder="Digite seu nome completo" 
          required 
        />

        <label htmlFor="email" className='label-form'>E-mail <span className="required ">*</span></label>
        <input 
          className='input-form'
          type="email" 
          id="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Digite seu e-mail" 
          required 
        />

        <label htmlFor="phone" className='label-form'>Telefone</label>
        <input 
          className='input-form'
          type="tel" 
          id="phone" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone" 
          placeholder="Digite seu telefone" 
        />

        <label htmlFor="proposal-type" className='label-form'>Tipo de Proposta <span className="required">*</span></label>
        <select 
        id="proposal-type"
        className='select-form'
        name="proposal-type"
        value={proposalType}
        onChange={(e) => setProposalType(e.target.value)}
        required>
          <option value="">Selecione uma opção</option>
          <option value="game-development">Desenvolvimento de Jogos</option>
          <option value="game-design">Design de Jogos</option>
          <option value="consultancy">Consultoria</option>
          <option value="others">Outros</option>
        </select>

        <label htmlFor="message" className='label-form'>Detalhes da Proposta <span className="required">*</span></label>
        <textarea 
          className='textarea-form'
          id="message" 
          name="message" 
          rows="5" 
          placeholder="Descreva sua proposta aqui..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required 
        ></textarea>

        <label htmlFor="file" className="label-form">Anexar Arquivo (opcional)</label>
        <input
          className="input-form"
          type="file"
          id="file"
          name="file"
          accept="application/pdf" // Apenas PDFs
          onChange={(e) => setFile(e.target.files[0])} // Salva o arquivo no estado
        />


        <button className='button-form' type="submit">Enviar Proposta</button>
      </form>
    </div>
  );
};

export default Formulary;

  