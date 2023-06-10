import request from 'superagent'
import { Friend } from '../../types/User'
import { ProfileDraft } from '../../types/Profile'

export async function createUser(form: ProfileDraft, token: string) {
  await request
    .post('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
}

export async function getUser(auth0: string, token: string) {
  const res = await request
    .get(`/api/v1/users/${auth0}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body
}

export async function followUser(auth0: string, token: string) {
  const res = await request
    .post(`/api/v1/users/${auth0}/follow`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body
}

export async function getFriends(token: string) {
  const res = await request
    .get(`/api/v1/users/friends`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body as Friend[]
}

export async function searchFriends(query: string, token: string) {
  const res = await request
    .get(`/api/v1/users/search?q=${query}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')

  return res.body as Friend[]
}
