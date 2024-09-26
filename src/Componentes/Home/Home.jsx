import React, { useState } from 'react';
import shape from '../Home/Imagens/Shape.png';
import imgExemplo from '../Home/Imagens/FotoFlaviano.jpg';
import logo from '../Home/Imagens/Logo.png';
import Sobre from '../Sobre/Sobre';
import Servicos from '../Servicos/Servicos';
import styles from './Home.module.css'; 
import Footer from '../Footer/Footer';
import Contato from '../Contato/Contato';
import Agendamento from '../Modal Agendamento/Agendamento';
import Tabela from '../Tabela/Tabela';
import Orcamento from '../Orçamento/Orcamento';
import Avaliacao from '../Avaliações/Avaliacao';

const Home = () => {
  const [abreModal, setAbreModal] = useState(false);
  const [abreTabela, setAbreTabela] = useState(false)
  const [abreOrcamento, setAbreOrcamento] = useState(false)
  const [abreAvalicao, setAvalicao] = useState(false)

  function abreModalAgendamento(e) {
    e.preventDefault();
    setAbreModal(!abreModal);
  }

  function abreOrcamentoModal(e){
    e.preventDefault()
    setAbreOrcamento(!abreOrcamento)
  }

  function abreModalAvaliacao(e) {
    e.preventDefault();
    setAvalicao(!abreAvalicao);
  }


  function fechaModal(){
    setAbreModal(false)
    setAbreTabela(false)
    setAbreOrcamento(false)
    setAvalicao(false)
  }

  function abreTabelaPreco(e){
    e.preventDefault()
    setAbreTabela(!abreTabela)
  }


  return (
    <div className={styles.home}>
      {/* Navbar */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={styles.lista}>
          
          {/* Divisões de li */}
          <li>Inicio</li>
          <li>Sobre</li>
          <li onClick={abreTabelaPreco}>Tabela</li>
          <li onClick={abreOrcamentoModal}>Orçamento</li>
          <li onClick={abreModalAvaliacao}>Avaliações</li>
        </ul>
      </header>
      
      {/* Agendamento de serviço da home */}
      <div className={styles.agendaServico}>
        <h1 className={styles.titulo}>
          Transformando espaços e
          <br /> elevando conforto <br /> Seu especialista em Forro PVC
        </h1>
        <p className={styles.subtituloServico}>
          Empresa de Forro PVC em Fortaleza
          <br /> especializado em soluções práticas e elegantes para todos os
          ambientes.
        </p>
        <button onClick={abreModalAgendamento} className={styles.btn}>Agendar serviço</button>
      </div>
      <div></div>
      {abreModal && (
        <div className={styles.modalOverlay}>
          <Agendamento onClose={fechaModal}/>
        </div>
      )}
        {abreTabela && (
        <div className={styles.modalOverlay}>
          <Tabela onClose={fechaModal}/>
        </div>
      )}

        {abreOrcamento && (
        <div className={styles.modalOverlay}>
          <Orcamento onClose={fechaModal}/>
        </div>
      )}

        {abreAvalicao && (
        <div className={styles.modalOverlay}>
          <Avaliacao onClose={fechaModal}/>
        </div>
      )}

      <img src={shape} className={styles.shape} alt="" />
      <div>
        <img className={styles.imagens} src={imgExemplo} alt="" />
      </div>
      {/* Importando outros componentes */}
      <div className={styles.sobreConteiner}>
        <Sobre />
      </div>
      <div className={styles.servicosConteiner}>
        <Servicos />
      </div>
      <div className={styles.contatoConteiner}>
        <Contato />
      </div>
      <div className={styles.footerConteiner}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
