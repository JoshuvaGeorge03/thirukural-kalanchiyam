import type { ChangeEvent } from "react";

interface InputProps {
    type: 'search' | 'text' | 'number' | 'checkbox' | 'radio' | 'date' | 'datetime' | 'email' | 'password';
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function Input(props: InputProps) {
    const { type = 'text', onChange, placeholder } = props;

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        onChange?.(e?.target?.value)
    }

    return (
        <input type={type} placeholder={placeholder} onChange={handleChange} />
    );
} 