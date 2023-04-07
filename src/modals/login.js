import { useState } from 'react';
import { createModal } from '../utils/modal';
import Header from './components/header';
import { Search } from '@mui/icons-material';

export default function LoginModal({ data, close }) {
  const [search, setSearch] = useState('');
  return (
    <div className='w-[500px] p-4'>
      <Header title='Giriş yap' />
      <div className='flex flex-row justify-center items-center border border-slate-300 rounded-md p-2 mt-2 mb-2'>
        <Search />
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search for anything...'
          name='search'
          className='placeholder:italic placeholder:text-slate-400 block bg-white w-full pl-2 pr-3 shadow-sm focus:outline-none sm:text-sm mt-1 '
        />
      </div>

      <p>Aranan kelime: {search}</p>

      <div className='flex flex-row justify-between items-center'>
        <button
          onClick={() =>
            createModal('register', {
              name: 'haktan',
              surname: 'albayrak',
              setSearch,
            })
          }
          className='hover:border-b-2 hover:border-b-slate-500 transition-all'
        >
          Register modalı yükle
        </button>
        <button
          onClick={close}
          className='border-2 border-gray-200 p-2 hover:bg-red-700 hover:text-white transition-all'
        >
          Kapat
        </button>
      </div>
    </div>
  );
}
