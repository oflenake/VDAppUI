import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Properties
  messages: string[] = [];

  // Public Method Functions - addMessage function
  addMessage(message: string) {
    this.messages.push(message);
  }

  // Public Method Functions - clearMessage function
  clearMessage() {
    this.messages = [];
  }

}
