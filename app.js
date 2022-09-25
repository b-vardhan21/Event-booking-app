//import express
const express = require('express')
//import body-parser
const bodyParser = require('body-parser')

const graphqlHttp = require('express-graphql').graphqlHTTP;
//adding schema so need to import
const { buildSchema } = require('graphql')
//this build schema takes a string so that we can build our schema
//now we can create app
const app = express();

app.use(bodyParser.json());//middleware to parse incoming json


//query-> we wanna fetch data
//mutation-> we wanna change data
app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!

        }
        
        type RootMutation{
            createEvent(name: String): String
        }
        schema{
            query: RootQuery
            mutation: RootMutation
        }
    
    `),
    rootValue: {//js object that has resolver function in it, resolver fun need to match our schema end points
        //resolvers for events
        events: () => {
            return ['Romantic cooking', 'Sailing']
        },
        //resolver for createEvent
        createEvent: (args) => {
            const eventName = args.name;
            return eventName;
        }
    },
    graphiql: true
}));

app.listen(3000);