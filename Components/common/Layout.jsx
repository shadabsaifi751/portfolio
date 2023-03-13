import { MetaData } from '@/content'
import Head from 'next/head'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="description" content={MetaData.description} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={MetaData.title} />
                <meta property="og:description" content={MetaData.description} />
                <meta property="og:url" content={MetaData.siteUrl} />
                <meta property="og:site_name" content={MetaData.title} />
                <meta
                    property="og:image"
                    content="https://www.shadabsaifi.com/preview.jpg"
                />
                <meta property="og:image:secure_url" content={MetaData.siteUrl} />
                <meta property="og:image:width" content="1440" />
                <meta property="og:image:height" content="800" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    )
}

export default Layout