import { RouterAdapter } from '@/components/router-adapter'
import { SignupRouter } from '@/components/signup-router'
import express from 'express'

const app = express()
app.use(express.json())

const router = new SignupRouter()
app.post('/api/', RouterAdapter.Adapt(router))

app.listen(3000)
