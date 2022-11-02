import { TranscribeMessageEvent } from "../models/transcribe-message";
import { deidTranscribeMessageEvent } from "./comprehend-client";

const simplePayload: TranscribeMessageEvent = {
    "Results": [
        {
            "Alternatives": [
                {
                    "Items": [],
                    "Transcript": "Hello. My name is Steve Hansen and I'm residing on 123 Main Street, Los Angeles Zip code 90210."
                }
            ],
            "EndTime": 9.555,
            "IsPartial": false,
            "ResultId": "29d6aada-67e4-414e-96c4-f6ca92c6ec97",
            "StartTime": 0.93
        }
    ],
    "speakerName": "61900c7c-50ff-4c0f-8219-d86f21d73a0c",
    "callId": "abcde1234",
    "eventTimestamp": "2022-11-02T01:34:32.973Z"
};

test("can deid standard payload, check content", async () => {
    const target = deidTranscribeMessageEvent;
    const testPayload = simplePayload;
    const deidedPayload = await deidTranscribeMessageEvent(testPayload);
    const deidedExpectedTranscript = "Hello. My name is [NAME] and I'm residing on [ADDRESS], Los Angeles Zip code 90210.";
});

