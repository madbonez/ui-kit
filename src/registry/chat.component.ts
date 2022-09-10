import register from 'preact-custom-element';
import { Chat } from '../chat/Chat';

register(Chat, 'mad-chat', [], {shadow: true});
