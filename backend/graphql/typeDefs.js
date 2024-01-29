const { gql } = require("apollo-server");

module.exports = gql`
type Product{
    shopId:ID!
    name: String!
    description: String!
    shops: Shops!
}
type Shops{
    name: String!
    email: String!
    product:[Product!]
    event: [Event]
}
type Codes {
    name: String!
    value: Float!,
    shopId: ID!,
    minamount: Float,
    maxamount: Float
}
type Event{
    name: String!
    description: String!
    category: String!
    status: String!
    tags: String!   
    shopId: ID!
    shops: Shops!
}
type Users{
    name: String!
    email: String!
    role: String!
}
type Order {
    totalPrice: Float!
    status: String!
    id:ID!
}

type Conversation {
    members: [ID!]!
    lastMessage: String!
}
type Message{
    text: String!
    sender:ID!
}
type Query{
    products: [Product!]!
    product(id:ID!):Product!
    shops(id:ID!): Shops! 
    codes: [Codes!]!
    code(id:ID!): Codes!
    events:[Event!]!
    event(id:ID!):Event
    users:[Users!]!
    user(id:ID!): Users!
    orders:[Order!]!
    order(id:ID!):Order!
    conversations:[Conversation!]!
    conversation:Conversation!
    messages:[Message!]!
    message(id:ID!):Message!
}
input AddCode{
    name: String!
    value: Float!,
    shopId: ID!,
}
input ConversationInput{
    members: [ID!]
}
input OrderInput {
    totalPrice: Float,
    status: String
}
input ProductInput{
name: String
description: String
}
input CuponInput{
    name:String
    value:Float
}
input EventInput{
    name: String
    description: String
    category: String
    status: String
    tags: String
}
input UsersInput{
    name: String
    email: String
    role:String
}
input MessageInput{
    text: String
}


type Mutation{
    createProduct(productsinput:ProductInput):Product!
    deleteProduct(id:ID!): Boolean
    updateProduct(id:ID!,productsinput:ProductInput): Boolean
    addCupon(addinput:AddCode!): Codes!
    deleteCupon(id:ID!): Boolean
    updateCupon(id:ID!,cuponinput:CuponInput):Boolean
    deleteEvent(id:ID!): Boolean
    updateEvent(id:ID!, eventinput:EventInput):Boolean
    deleteUser(id:ID!): Boolean
    updateUser(id:ID!, userinput:UsersInput):Boolean
    deleteOrder(id:ID!): Boolean
    updateOrder(id:ID!, orderinput:OrderInput):Boolean
    deleteConversation(id:ID!): Boolean
    updateConversation(id:ID!, conversationinput:ConversationInput): Boolean
    deleteMessage(id:ID!): Boolean
    updateMessage(id:ID!, messageinput:MessageInput): Boolean
}
`