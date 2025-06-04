import { useState } from "react"

import { Input } from "../components/input"

import { Button } from "../components/Button"


export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        console.log(email, password);
        
    }




    return <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
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

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <a href="/signup" className="text-center mt-10 mb-4 text-gray-200 hover:text-green-800 transition ease-linear">Criar conta</a>
    </form>
}
