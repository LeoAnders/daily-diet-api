import { FastifyInstance } from 'fastify'
import { user } from './controllers/user'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', user)
}