import { Navigate, useLocation } from 'react-router';
import okSvg from '../assets/ok.svg';

export function Confirm() {
    const location = useLocation();

    if(!location.state?.fromSubmit) {
        return <Navigate to="/" />
    }

    return(
        <div className='flex flex-col items-center gap-6 p-10 bg-gray-500 rounded-xl lg:min-w-[512px]'>

            <h1 className='font-bold text-center text-2xl text-green-100'>
                Solicitação enviada
            </h1>

            <img src={okSvg} alt="Ok" className='w-28'/>
            <p className='text-sm text-center text-gray-200'>
                Sua solicitação foi enviada e será analisada em breve.
            </p>

            <a href='/'
            className='w-full p-3 bg-green-100 rounded-lg text-center text-white hover:bg-green-200 transition ease-linear'>
            Nova Solicitação
            </a>
        </div>
        
    )
}