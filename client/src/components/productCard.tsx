import Papaya from '../assets/papaya.jpg'

const productCard = () => {
  return (
    <section className='flex-col items-center justify-center p-3'>
        <div className='bg-white shadow-lg rounded-lg max-w-[19.5rem] w-full p-3'>
            <section className='w-72'>
                <img src={Papaya} alt="papaya" className='rounded-md' />
            </section>
            <section className='flex-col'>
                <div className='border-none'>
                    <h1 className='font-bold text-lg mt-2'>Papaya Red Lady</h1>
                </div>
                <div className=' border-none flex font-semibold mb-2'>
                    <p>Cost - </p>
                    <p className='text-green-800'>₹100 per unit</p>
                </div>
                <div className=''>
                    <p>Type - fruit</p>
                </div>
                <div className=''>
                    <h1 className=''>Available weight - 20kg</h1>
                </div>
                <div>
                    <button type='submit' title='contact merchant' className='w-full mt-6'>contact merchant</button>
                </div>
            </section>
        </div>
    </section>
  )
}

export default productCard