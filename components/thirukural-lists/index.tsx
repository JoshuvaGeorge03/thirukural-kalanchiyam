import type { KuralEntity } from "../../thirukural-types/types";
import ThriukuralList from "../thirukural-list";
import styles from './thirukurallist.module.css';


export default function ThriukuralLists({ thrikurals }: { thrikurals: KuralEntity[] }) {
    return (
        <div className={styles.listContainer}>
            {
                thrikurals.map(thirukural => {
                    return <ThriukuralList key={thirukural.Number} thirukural={thirukural}/>
                })
            }
        </div>
    )
}