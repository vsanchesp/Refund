export function Notfound(){
    return(
        <div className="h-screen w-screen flex justify-center items-center bg-gray-400">
            <div className="flex flex-col">
                <h1 className="text-gray-900 font-semibold text-3xl mb-10">
                    Opaa!! Página errada, a página não foi encontrada.😞
                </h1>
                <a 
                href="/"
                className="font-semibold text-center text-green-800 hover:text-green-900 transition ease-linear"
                >Voltar para o início</a>
            </div>
        </div>
    )
}