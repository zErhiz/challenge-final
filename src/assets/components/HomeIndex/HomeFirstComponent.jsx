import { useNavigate } from 'react-router-dom'
import fondo from '../../../../public/images/banners/Home.png'
import CategoriesNav from '../Navigation/CategoriesNav';

const HomeFirstComponent = () => {

  const navigate = useNavigate()

  return (
    <>
      <CategoriesNav />
      <div className='relative '>
        <div className='w-full h-[80vh] flex justify-end'>
          <img src={fondo} alt='image bg' className='h-full object-cover' />
        </div>
        <div className='absolute top-4 left-4 sm:top-[30%] sm:left-[5%]'>
          <h2 className=' text-xl  sm:2xl md:text-5xl xl:text-5xl font-bold text-start'>Super pricessa on</h2>
          <h2 className=' text-xl sm:2xl md:text-5xl xl:text-5xl font-bold text-start'>your favorite items</h2>
          <p className=' md:text-start text-md md:text-md w-full text-[#393939] hidden  md:block'>Earn more for your money</p>
          <button onClick={() => navigate(`/allproducts`)} className='rounded-full py-2.5 w-[40%] xl:w-[10rem] bg-[#7847E0] text-white font-semibold z-10'>Buy now</button>
        </div>
      </div>
    </>
  )
}

export default HomeFirstComponent