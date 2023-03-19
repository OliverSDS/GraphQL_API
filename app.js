import { GraphQLServer } from 'graphql-yoga';
import data_json from './json/data.json';
import {typeDefs} from "./typeDef";
import user_json from './json/users.json';

const Countrys = data_json.maps;

const user_list = user_json.users;

const resolvers = {
    Query: {
        country: (parent, args) => Countrys.find(country => String(country.id) === args.id),
        all_country:(parent, args) => Countrys,
        user: (parent, args) => user_list.find(user => String(user.id) === args.id),
        users:(parent, args) => user_list,
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));