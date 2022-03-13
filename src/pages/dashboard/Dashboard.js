import React from 'react'
import InputSearch from '../../components/inputSearch/InputSearch';
import Sidebar from '../../components/Sidebar/Sidebar';
import useModals from '../../hooks/useModals';
import FormModal from './components/formModal/FormModal';
import HeaderMain from './components/headerMain/HeaderMain';
import MainCards from './components/mainCards/MainCards';
import Modal from './components/modal/Modal';
import "./dashboard.css";

const Dashboard = () => {
  const [isOpen1,openModal1,closeModal1] = useModals();
  return (
    <div className='container__dashboard'>
       <div className='item__dashboard__sidebar'>
          <Sidebar/>
       </div>
       <main className='item__dashboard__main'>
          <section className='search_dashboard'>
            <InputSearch/>
          </section>
          <section className='tools_dashboard'>
            <HeaderMain openModal={openModal1} />
          </section>
          <section className='main__dashboard'>
            <MainCards openModal1={openModal1}/>
          </section>
          <Modal openModal={openModal1} closeModal={closeModal1} isOpen={isOpen1}>
            <FormModal textButton={"Agregar"}/>
          </Modal>
       </main>
    </div>
  )
}

export default Dashboard;
