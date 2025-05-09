import { Emoji } from "../emoji/emoji";

export class EmojiProcessingQueue{
    "id": number;
    "emoji" : Emoji;
    "remainingTime": number;
    "isDone": boolean;
}