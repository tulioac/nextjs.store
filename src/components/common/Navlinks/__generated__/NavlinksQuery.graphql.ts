

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type NavlinksQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NavlinksQueryQuery = { allStoreCollection: { nodes: Array<{ slug: string, seo: { title: string } }> } };


// Query Related Code

export const NavlinksQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query NavlinksQuery {\n  allStoreCollection(limit: 2, filter: {type: {eq: Department}}) {\n    nodes {\n      slug\n      seo {\n        title\n      }\n    }\n  }\n}\n",
  sha256Hash: "df51ae0e0d119b93d0e027db4a407816a825bf67c7b5a37f77e8383ae3d7d832",
  operationName: "NavlinksQuery",
}

