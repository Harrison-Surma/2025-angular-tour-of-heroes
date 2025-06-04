import { Component } from '@angular/core';
import { Message } from 'app/services/message';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {
  constructor(public messageService: Message) {}
}
