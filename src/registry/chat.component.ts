import register from 'preact-custom-element';
import { ChatApp } from '../chat/ChatApp';

register(ChatApp, 'mad-chat', [], {shadow: true});
