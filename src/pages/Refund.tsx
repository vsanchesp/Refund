import { useState } from "react"
import { useNavigate } from "react-router"

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { Input } from "../components/input"
import { Select } from "../components/Select"
import { Upload } from "../components/upload"
import { Button } from "../components/Button"

export function Refund() {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [filename, setFilename] = useState<File | null>(null)

    const navigate = useNavigate()

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        console.log(name, amount, category, filename)
        navigate("/confirm", { state: { fromSubmit: true } })
    }

    return(
        <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
            <header>
                <h1 className="text-xl font-bold text-gray-100">
                    Solicitação de reembolso
                </h1>

                <p className="text-sm text-gray-200 mt-2 mb-4">
                    Dados da despesa para solicitar reembolso
                </p>
            </header>

            
            <Input 
                required 
                legend="Nome da Solicitação"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <div className="flex gap-4">
                <Select
                    required legend="Categoria" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {CATEGORIES_KEYS.map((category) => (
                        <option key={category} value={category}>
                         {CATEGORIES[category].name}
                        </option>
                    ))}
                </Select>

                <Input 
                    legend="Valor" 
                    required 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
            </div>

            <Upload
            filename={filename && filename.name}
            onChange={(e) => e.target.files && setFilename(e.target.files[0])}
            />
            <Button 
                type="submit" 
                isLoading={isLoading}>
                 Enviar
            </Button>


        </form>
    )
}