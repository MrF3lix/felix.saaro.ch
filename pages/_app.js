import React from 'react';
import Head from 'next/head';


const CustomApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="theme-color" content="#0f0f0f" />

                <meta property="title" content="Felix Saaro" />
                <meta property="og:title" content="Felix Saaro" />

                <meta property="description" content="Felix Saaro is a debater, inventor and software developer that is interessted in people & technology. Since the end of 2018 he is working once again as a Full-Stack Developer. This time with different technologies and more responsibility than ever." />
                <meta property="og:description" content="Felix Saaro is a debater, inventor and software developer that is interessted in people & technology. Since the end of 2018 he is working once again as a Full-Stack Developer. This time with different technologies and more responsibility than ever." />
                
                <meta property="og:type" content="website" />
                <meta property="url" content="https://felix.saaro.ch" />
                <meta property="og:url" content="https://felix.saaro.ch" />

                <meta property="og:image" content="https://felix.saaro.ch/content/images/share.jpg" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:alt" content="Logo - Felix Saaro" />

                <link rel="image_src" href="https://felix.saaro.ch/content/images/share.jpg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f0f0f" />
                <meta name="msapplication-TileColor" content="#fdfdfd" />
                <meta name="theme-color" content="#fdfdfd" />
                
                <title>Felix Saaro</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default CustomApp;