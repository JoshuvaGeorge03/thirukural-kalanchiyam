import type { KuralEntity } from "../../thirukural-types/types";
import ThirukuralCard from "./thirukural-card";


export default function ThriukuralList({ thirukural }: { thirukural: KuralEntity }) {
    return <ThirukuralCard thirukural={thirukural} />
}