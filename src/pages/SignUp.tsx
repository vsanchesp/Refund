import { useState } from "react"

import { Input } from "../components/input"

import { Button } from "../components/Button"


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        console.log(name, email, password, confirmPassword);
        
    }




    return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
        <Input 
        required
        legend="Nome"
        placeholder="Digite seu nome" 
        onChange={(e)=>setName(e.target.value)}
        />

        <Input 
        required
        legend="E-mail"
        type="email" 
        placeholder="Seu@email" 
        onChange={(e)=>setEmail(e.target.value)}
        />

        <Input 
        required
        legend="Password"
        type="password" 
        placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}
        />

        <Input 
        required
        legend="Confirme sua senha"
        type="password" 
        placeholder="Password" 
        onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <a href="/" className="text-center mt-10 mb-4 text-gray-200 hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
    </form>
}
