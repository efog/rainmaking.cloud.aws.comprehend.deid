import { SQSBatchResponse, SQSEvent, SQSRecord } from "aws-lambda";
import * as Debug from "debug";
import { TranscribeMessageEvent } from "../models/transcribe-message";

const debug = Debug("DEBUG::FUNCTIONS::HANDLERS::deid.lambda.handlers.ts");
const trace = Debug("TRACE::FUNCTIONS::HANDLERS::deid.lambda.handlers.ts");
const info = Debug("INFO::FUNCTIONS::HANDLERS::deid.lambda.handlers.ts");
const warn = Debug("WARN::FUNCTIONS::HANDLERS::deid.lambda.handlers.ts");
const error = Debug("ERROR::FUNCTIONS::HANDLERS::deid.lambda.handlers.ts");

/**
 * Handles De-ID requests from SQS
 * @param {SQSEvent} event SQS event containing records from SQS input queue
 * @returns {SQSBatchResponse} batch item failures record
 */
export async function handleDeidSQSRequest(event: SQSEvent): Promise<SQSBatchResponse> {
    info("received request");
    debug(`received request ${JSON.stringify(event)}`);
    const retVal = {} as SQSBatchResponse;
    retVal.batchItemFailures = [];
    const records = event.Records.map((record: SQSRecord) => {
        const body = JSON.parse(record.body) as TranscribeMessageEvent;
        return body;
    });

    return retVal;
}
