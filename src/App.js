import { createModal, useModals } from './utils/modal';
import Modal from './modals';

function App() {
  const modals = useModals();

  return (
    <div className='p-4 flex justify-center items-center h-screen'>
      {modals.length > 0 && <Modal />}
      <button
        onClick={() => {
          createModal('login');
        }}
        className='bg-sky-500 hover:bg-sky-600 p-3 rounded-full hover:text-white transition-all'
      >
        Modal Aç
      </button>
    </div>
  );
}

export default App;
