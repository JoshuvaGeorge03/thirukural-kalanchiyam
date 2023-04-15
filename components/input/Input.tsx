import type { ChangeEvent } from "react";

interface InputProps {
    type: 'search' | 'text' | 'number' | 'checkbox' | 'radio' | 'date' | 'datetime' | 'email' | 'password';
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export default function Input(props: InputProps) {
    const { type = 'text', onChange, placeholder, className } = props;

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        onChange?.(e?.target?.value)
    }

    return (
        <input className={className} type={type} placeholder={placeholder} onChange={handleChange} />
    );
} 