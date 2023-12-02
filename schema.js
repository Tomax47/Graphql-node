export const typeDefs = `#graphql

type Game {
    id: ID!,
    title: String!,
    platform: [String!]!
}
type Review {
    id: ID!,
    rating: Int!, 
    content: String!
}
type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
}

type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
}
`

// DATATYPES -> Int, Float, String, Boolean, ID

// [string] -> Array of strings 

// If we want the var not to be nullable, we gotta add an ! mark at the end of 
// [string!]! -> Means none of the strings in the array should be null, neither the array itself, thats y we used two ! marks
