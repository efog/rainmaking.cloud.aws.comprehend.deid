import { SQSBatchResponse, SQSEvent } from "aws-lambda";
/**
 * Handles De-ID requests from SQS
 * @param {SQSEvent} event SQS event containing records from SQS input queue
 * @returns {SQSBatchResponse} batch item failures record
 */
export declare function handleDeidSQSRequest(event: SQSEvent): Promise<SQSBatchResponse>;
