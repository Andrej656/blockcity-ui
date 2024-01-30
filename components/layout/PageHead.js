import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Blockcity | Marketplace on Stacks"}
                </title>
            </Head>
        </>
    )
}

export default PageHead