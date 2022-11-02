/**
 * Transcribe result event message structure
 */
export type TranscribeMessageEvent = {
    Results: [{
        Alternatives: [{
            Items: any[],
            Transcript: string
        }],
        EndTime: number,
        IsPartial: boolean,
        ResultId: string,
        StartTime: number
    }],
    callId: string,
    speakerName: string,
    eventTimestamp: string,
}
