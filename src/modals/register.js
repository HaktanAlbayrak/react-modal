import Header from './components/header';

export default function RegisterModal({ data, close }) {
  return (
    <div className='w-[700px]'>
      <Header title='Kayıt ol' />
      <div className='p-4'>
        {data.name}
        <br />
        {data.surname}
        <br />
        <button
          onClick={() => {
            data.setSearch('yeni search kelimesi');
            close();
          }}
        >
          Search güncelle
        </button>
      </div>
    </div>
  );
}
