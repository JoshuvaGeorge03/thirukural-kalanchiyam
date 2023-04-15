import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width;' />
                <link rel='icon' href='/thiruvalluvar.ico' type='image/ico' />
            </Head>
            <body>
                <div className='container'>
                    <Main></Main>
                </div>
                <NextScript />
            </body>
        </Html>
    );
}