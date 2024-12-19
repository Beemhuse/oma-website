import React from 'react'
import { PortableText } from 'next-sanity';
import Image from 'next/image';


const components = {
  types: {
    image: ({ value }) => <Image src={value.asset.url} alt="Blog image" width={500} height={500} />,
    code: ({ value }) => (
      <pre>
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
  },
};
export default function DisplayFormattedArticle({description}) {
  return (
        <PortableText value={description} components={components} />
    )
}
