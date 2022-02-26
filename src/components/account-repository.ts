import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const client = new MongoClient(process.env.URI_MONGODB)
const collection = client.db('users').collection('members')

export class AddAccountRepository {
  async add (email: string, password: string) {
    await client.connect()
    await collection.insertOne({ name: 'guest', email, password, avatarUrl: 'https://github.com/byhyakimaro.png' })
  }
}

export class GetAccountRepository {
  async get (email: string, password: string) {
    await client.connect()
    const result = await collection.findOne({ email, password })
    return result
  }
}
