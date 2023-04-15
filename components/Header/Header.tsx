import Image from 'next/image';
import Head from 'next/head';
import { websiteHeaderName } from '../../constants';
import styles from './Header.module.css';

export function Header({ headerTitle, children, imageSource }: {
    headerTitle: string,
    children: React.ReactElement,
    imageSource: string
}) {
    return (
        <header>
            <nav className={styles.navigation}>
                <Image src={imageSource} width={150} height={150} alt="thiruvalluvar image" />
                <h1>{headerTitle}</h1>
            </nav>
            <h2 className={styles.searchInputFieldContainer}>
                {children}
            </h2>
        </header>
    );
}


export default function ThriukuralHeader({ children }: {
    children: React.ReactElement
}) {
    return (
        <>
            <Head>
                <title>{websiteHeaderName}</title>
            </Head>
            <Header headerTitle={websiteHeaderName} imageSource='/thiruvalluvar.svg'>
                {children}
            </Header>
        </>
    )
}