import { useState } from 'react';

// type imports
import type { KuralEntity } from '../thirukural-types/types';

// component imports
import ThriukuralLists from '../components/thirukural-lists';
import ThirukuralSearchBox from '../components/thirukural-search/ThriukrualSearch';

// config imports
import { CONFIG } from '../server.config';


function Home({ thirukurals }: { thirukurals: KuralEntity[] }) {
    console.log('http://localhost:3000', thirukurals);

    const [kurals, setKurals] = useState(() => thirukurals);

    function handleSearch(val: string) {
        fetch(CONFIG.apiEndPoint + '/api/thriukural-search', {
            body: JSON.stringify({val}),
            method: 'POST'
        }).then(res => {
            return res.json();
        }).then(value => {
            if(value) {
                setKurals(value)
            } else {
                setKurals(thirukurals)
            }
        });
    }


    return (
        <>
            <header>
                <nav>
                    <h1>
                        திருக்குறள் களஞ்சியம்
                    </h1>
                </nav>
                <ThirukuralSearchBox onSearch={handleSearch} />
            </header>
            <main>
                <section>
                    <ThriukuralLists thrikurals={kurals} />
                </section>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const thirukuralsRes = await fetch(CONFIG.apiEndPoint + '/api/thirukurals');
    const thirukurals = await thirukuralsRes.json();
    return {
        props: {
            thirukurals
        }
    }
}

export default Home;