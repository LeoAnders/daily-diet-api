import { FastifyReply, FastifyRequest } from 'fastify';
import knex from 'knex';
import { randomUUID } from 'node:crypto';
import { z } from 'zod'
import { hash } from 'bcryptjs'

export async function user(request: FastifyRequest, reply: FastifyReply) {
  const createUserBodySchema = z.object({
    user: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { user, email, password } = createUserBodySchema.parse(request.body)

  const password_hash = await hash(password, 6)

  try {
    await knex('transactions').insert({
      id: randomUUID(),
      user,
      email,
      password_hash,
      created_at: new Date()
    })

  } catch (err) {
    reply.status(201).send(err)
  }
}