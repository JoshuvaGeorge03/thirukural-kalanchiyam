import type { KuralEntity } from "../../thirukural-types/types";
import ThriukuralList from "../thirukural-list";


export default function ThriukuralLists({ thrikurals }: { thrikurals: KuralEntity[] }) {
    return (
        <>
            {
                thrikurals.map(thirukural => {
                    return <ThriukuralList key={thirukural.Number} thirukural={thirukural}/>
                })
            }
        </>
    )
}