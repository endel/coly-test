import { Schema, type } from '@colyseus/schema'
import { Room } from 'colyseus'

class State extends Schema {
  @type('string')
  lastMessage: string = ''
}

export class TestRoom extends Room<State> {
  maxClients = 4

  onInit(options) {
    console.log('chat on init')
    this.setState(new State())
  }

  onJoin(client, options, auth) {
    console.log('client has joined!')
  }

  onMessage(client, data) {
    console.log('onMessage:', client.id, data)
  }

}
