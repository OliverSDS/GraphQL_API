
export const typeDefs =
`
  type Query {
    #Filter by country ID number
    country(id: ID!): Country!
    #All countries
    all_country: [Country!]!
    #Filter by user ID number
    user(id: ID!): User!
    #All Users
    users: [User!]!
    #Filter by message ID number
    message(id: ID!): Message!
    #All Messages
    messages: [Message!]!
  }
  
  type Country{
    #Country number
  	id: ID!
  	#Sponsor information
  	uri: String!
  	#Clan owning the province
  	owner: String!
  	value: String!
  	isBase: String!
  	#Attacker clan
  	attackerClan: String!
  	#Linked countries
  	roads: [String]
  	#Attacker enemy clans
  	attackerWarriors: [String]
  	#Defender warriors
  	defenderWarriors: [String]
  }
  
  type User{
  id:  ID!
  address:  String!
  clan : Int
  seasonPoint: Int
  }
  
  type Message{
  id:  ID!
  type:  String!
  message : String!
  priority: Int!
  }
  
`;