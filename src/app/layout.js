import Head from "next/head";
export const metadata = {
  title: "E-Commerce Store",
  description: "Discover a wide range of products in our online store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="ecommerce, online store, shopping, products" />
        <meta name="author" content="Kavita B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
