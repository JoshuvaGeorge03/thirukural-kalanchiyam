import Input from "../input/Input";
import styles from './Search.module.css';


type SearchBoxProps = {
    onChange: (value: string) => void;
    placeholder?: string; 
};

export function SearchBox({onChange, placeholder}: SearchBoxProps) {

    function handleChange(value: string) {
        onChange?.(value);
    }

    return (
        <Input className={styles.searchInput} type={'search'} onChange={handleChange} placeholder="search me" />
    );
}

export default function ThriurkuralSearchBox(props: { onSearch: (val: string) => void }) {

    function handleSearchingThriukural(value: string) {
        const { onSearch } = props;
        onSearch?.(value);
    }

    return <SearchBox onChange={handleSearchingThriukural} />
}