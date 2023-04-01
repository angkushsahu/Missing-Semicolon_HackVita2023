import Papaya from '../assets/papaya.jpg'

const productCard = () => {
  return (
    <section className='min-h-screen flex-col items-center justify-center p-3'>
        <div className='bg-white shadow-lg rounded-lg max-w-[19.5rem] w-full p-3'>
            <section className='w-72'>
                <img src={Papaya} alt="papaya" className='rounded-md' />
            </section>
            <section className='flex-col'>
                <div className='input-container border-none'>
                    <h1 className='font-bold'>Papaya Red Lady</h1>
                </div>
                <div className='input-container border-none flex'>
                    <p>Price - </p>
                    <p className='text-green-800'>$100</p>
                </div>
                <div>
                    <button type='submit' title='contact merchant' className='w-full text-lg mt-6'>contact merchant</button>
                </div>
            </section>
        </div>
    </section>
  )
}

export default productCard