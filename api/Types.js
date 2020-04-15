const { gql } = require("apollo-server-express")

const typeDefs = gql`
    # Type(s)
    
    type Toot {
        _id: String
        toot: String
        author: String
    } 
    # Query(ies)
    type Query {
        getToot(_id: String): Toot
        getToots: [Toot]
    }
    # Mutation(s)
    type Mutation {
        createToot(toot: String, author: String): Toot
        deleteToot(_id: String): Toot
        updateToot(_id: String!, toot: String!): Toot
    }
`

module.exports = typeDefs