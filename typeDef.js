
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
  
`;