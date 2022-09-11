import { Message } from '../model/Message';

export function getMessages(userId: string): Promise<Message[]> {
    return Promise.resolve(
        require('./__mock__/get-messages.response.json')
    );
}
