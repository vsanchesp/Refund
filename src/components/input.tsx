type Props = React.ComponentProps<"input"> & {
    legend?: string
}

export function Input({ legend, type = "text", ...rest}: Props) {
    return (
        <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-800 ">
            {legend &&
            <legend className="uppercase text-xas mb-2 text-inherit">
                {legend}
            </legend>
            }
            
            <input 
            type= {type} 
            className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 
            bg-transparent outline-none focus:border-2 focus:border-green-800 
            placeholder-gray-300"
            {...rest}/>
        </fieldset>
    )
}