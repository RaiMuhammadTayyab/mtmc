import faunadb from 'faunadb'
//require('dotenv').config();
const client = new faunadb.Client({secret:'fnAEwgxOiYACSa2wk1fNYoVUemjJbQdkRLBIS9ro'})
const q = faunadb.query
export { client , q }