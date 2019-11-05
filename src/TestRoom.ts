import { Schema, type } from '@colyseus/schema'
import { Room } from 'colyseus'

class State extends Schema {
  @type("number") number = 10;
  @type('string') someAtr: string = 'Hello world!'
}

export class TestRoom extends Room<State> {
  onCreate() {
    console.log('on init')
    this.setState(new State())
  }

  onJoin() {
    this.state.someAtr = "Mutating!";
    console.log('client has joined!')
  }

  onMessage(client, data) {
    console.log('onMessage:', client.id, data)
  }

}
