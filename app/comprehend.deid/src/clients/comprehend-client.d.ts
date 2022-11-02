import { ComprehendClient } from "@aws-sdk/client-comprehend";
import { TranscribeMessageEvent } from "../models/transcribe-message";
/**
 * De-IDs transcribe message
 * @param {TranscribeMessageEvent} messageEvent transcribe message to DeID
 * @returns {TranscribeMessageEvent} De IDed transcribe message
 */
export declare function deidTranscribeMessageEvent(messageEvent: TranscribeMessageEvent, client?: ComprehendClient | any): Promise<TranscribeMessageEvent>;
