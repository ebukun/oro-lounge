import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="description"
                        content="We offer a variety of both american and african dishes to choose from, to its finest taste making our clients wanting more. 
                        Your best spot for fun, relaxation and good food."
                    />

                    <meta itemprop="name" content="Oro lounge" />
                    <meta
                        itemprop="description"
                        content="We offer a variety of both american and african dishes to choose from, to its finest taste making our clients wanting more. 
                         Your best spot for fun, relaxation and good food."
                    />
                    <meta itemprop="image" content="https://i.ibb.co/PmRX8gS/Logo.png" />

                    <meta property="og:url" content="https://oro-lounge.vercel.app" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Oro lounge" />
                    <meta
                        property="og:description"
                        content="We offer a variety of both american and african dishes to choose from, to its finest taste making our clients wanting more. 
                        Your best spot for fun, relaxation and good food."
                    />
                    <meta property="og:image" content="https://i.ibb.co/PmRX8gS/Logo.png" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Oro lounge" />
                    <meta
                        name="twitter:description"
                        content="We offer a variety of both american and african dishes to choose from, to its finest taste making our clients wanting more. 
                        Your best spot for fun, relaxation and good food."
                    />
                    <meta name="twitter:image" content="https://i.ibb.co/PmRX8gS/Logo.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
