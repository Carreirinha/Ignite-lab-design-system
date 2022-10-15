import { InputHTMLAttributes, ReactNode } from 'react';
import  { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';



export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full   focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconsProps{
    children: ReactNode
}

function TextInputIcon(props: TextInputIconsProps) {
    return(    
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props : TextInputInputProps){    

    return (
        <input
            className="bg-trasparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
            {...props}
        />       
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}