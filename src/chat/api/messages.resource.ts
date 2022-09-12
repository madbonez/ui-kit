import { Message } from '../model/Message';

export const initMockData: Message[] = JSON.parse(JSON.stringify(require('./__mock__/get-messages.response.json')));
let data = [...initMockData];
export function sendMessage(message: Message): Promise<Message[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            data = [...data, message];
            resolve(data);
        }, 500);
    })
}
