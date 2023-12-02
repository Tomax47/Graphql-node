export const typeDefs = `#graphql

type Game {
    id: ID!,
    title: String!,
    platform: [String!]!,
    reviews: [Review!]
}
type Review {
    id: ID!,
    rating: Int!, 
    content: String!,
    game: Game!,
    author: Author!
}
type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
    reviews: [Review!]
}

type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}

type Mutation {
    deleteGame(id: ID!): [Game]
    addGame(game: AddGameInput!): Game
}

input AddGameInput {
    title: String!,
    platform: [String!]!
}
`

// DATATYPES -> Int, Float, String, Boolean, ID

// [string] -> Array of strings 

// If we want the var not to be nullable, we gotta add an ! mark at the end of 
// [string!]! -> Means none of the strings in the array should be null, neither the array itself, thats y we used two ! marks
