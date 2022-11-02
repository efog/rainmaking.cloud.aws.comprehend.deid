import { ComprehendClient } from "@aws-sdk/client-comprehend";
import { TranscribeMessageEvent } from "../models/transcribe-message";

let _comprehendClient: ComprehendClient | null = null;
let comprehendClient = () : ComprehendClient => {
    if(_comprehendClient) {
        return _comprehendClient;
    }
    _comprehendClient = new ComprehendClient({
        region: process.env.AWS_DEFAULT_REGION || "ca-central-1"
    });
    return _comprehendClient;
};

/**
 * De-IDs transcribe message
 * @param {TranscribeMessageEvent} messageEvent transcribe message to DeID
 * @returns {TranscribeMessageEvent} De IDed transcribe message
 */
export async function deidTranscribeMessageEvent(messageEvent: TranscribeMessageEvent, client?: ComprehendClient | any): Promise<TranscribeMessageEvent> {
    const serviceClient = client || comprehendClient();
    return messageEvent;
}
