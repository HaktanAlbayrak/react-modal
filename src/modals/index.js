import { useEffect } from 'react';
import modalData from '../modalData.js';
import { useModals, destroyModal, destroyAllModal } from '../utils/modal.js';

export default function Modal() {
  const modals = useModals();

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        destroyModal();
      }
    };

    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
    };
  }, []);

  return (
    <div
      className='fixed inset-0 bg-black/50 flex items-center justify-center'
      onClick={() => {
        destroyAllModal();
      }}
    >
      {modals.map((modal, index) => {
        const m = modalData.find((m) => m.name === modal.name);
        return (
          <div
            key={index}
            className='hidden last:block bg-white shadow-lg rounded'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <m.element data={modal.data} close={destroyModal} />
          </div>
        );
      })}
    </div>
  );
}
