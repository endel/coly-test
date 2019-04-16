import { Schema, type } from '@colyseus/schema'
import { Room } from 'colyseus'

class State extends Schema {
  @type('string')
  someAtr: string = ''
}

export class TestRoom extends Room<State> {
  onInit() {
    console.log('on init')
    this.setState(new State())
  }

  onJoin() {
    console.log('client has joined!')
  }

  onMessage(client, data) {
    console.log('onMessage:', client.id, data)
  }

}
