import { Fragment } from "react"
import type { KuralEntity } from "../../thirukural-types/types"


function CardHeader({ children }: {
    children: React.ReactNode
}) {
    return <header>
        <h3>{children}</h3>
    </header>
}

function CardContent({ children }: {
    children: React.ReactNode
}) {
    return <section>
        {children}
    </section>
}

const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <footer>
        {children}
    </footer>
}

function Card({ children }: { children: React.ReactElement[] }) {
    return (
        <div>
            {children}
        </div>
    )
}

function ThirukuralPre({ firstLine, secondLine }: { firstLine: string, secondLine: string }) {
    return <pre>
        {
            `
            ${firstLine}
            ${secondLine}
        `
        }
    </pre>
}

export default function ThirukuralCard({ thirukural }: { thirukural: KuralEntity }) {

    const { Number, Line1: firstLine, Line2: secondLine, } = thirukural;

    return <Card>
        <CardHeader>
            {Number}
        </CardHeader>
        <CardContent>
            <ThirukuralPre firstLine={firstLine} secondLine={secondLine} />
        </CardContent>
    </Card>
}