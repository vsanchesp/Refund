type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
}

export function Button({
    children,
    isLoading, 
    type = "button", 
    ...rest
    }: Props){
    return(
        <button 
            type={type} 
            disabled={isLoading}
            className="flex items-center justify-center bg-green-800 rounded-lg text-white
            cursor-pointer hover:bg-green-900 transition ease-linear disabled:opacity-50
            disabled:cursor-progress h-12"
            {...rest}>
            {children}
        </button>
    )
}