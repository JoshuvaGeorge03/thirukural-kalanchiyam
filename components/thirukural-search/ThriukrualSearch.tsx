import Input from "../input/Input";


type SearchBoxProps = {
    onChange: (value: string) => void;
    placeholder?: string; 
};

export function SearchBox({onChange, placeholder}: SearchBoxProps) {

    function handleChange(value: string) {
        onChange?.(value);
    }

    return (
        <Input type={'search'} onChange={handleChange} placeholder="search me" />
    );
}

export default function ThriurkuralSearchBox(props: { onSearch: (val: string) => void }) {

    function handleSearchingThriukural(value: string) {
        const { onSearch } = props;
        onSearch?.(value);
    }

    return <SearchBox onChange={handleSearchingThriukural} />
}