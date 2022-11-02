"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comprehend_client_1 = require("./comprehend-client");
const simplePayload = {
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
    const target = comprehend_client_1.deidTranscribeMessageEvent;
    const testPayload = simplePayload;
    const deidedPayload = await (0, comprehend_client_1.deidTranscribeMessageEvent)(testPayload);
    const deidedExpectedTranscript = "Hello. My name is [NAME] and I'm residing on [ADDRESS], Los Angeles Zip code 90210.";
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJlaGVuZC1jbGllbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbXByZWhlbmQtY2xpZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBaUU7QUFFakUsTUFBTSxhQUFhLEdBQTJCO0lBQzFDLFNBQVMsRUFBRTtRQUNQO1lBQ0ksY0FBYyxFQUFFO2dCQUNaO29CQUNJLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxpR0FBaUc7aUJBQ2xIO2FBQ0o7WUFDRCxTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsc0NBQXNDO1lBQ2xELFdBQVcsRUFBRSxJQUFJO1NBQ3BCO0tBQ0o7SUFDRCxhQUFhLEVBQUUsc0NBQXNDO0lBQ3JELFFBQVEsRUFBRSxXQUFXO0lBQ3JCLGdCQUFnQixFQUFFLDBCQUEwQjtDQUMvQyxDQUFDO0FBRUYsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3hELE1BQU0sTUFBTSxHQUFHLDhDQUEwQixDQUFDO0lBQzFDLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUNsQyxNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUEsOENBQTBCLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEUsTUFBTSx3QkFBd0IsR0FBRyxxRkFBcUYsQ0FBQztBQUMzSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zY3JpYmVNZXNzYWdlRXZlbnQgfSBmcm9tIFwiLi4vbW9kZWxzL3RyYW5zY3JpYmUtbWVzc2FnZVwiO1xuaW1wb3J0IHsgZGVpZFRyYW5zY3JpYmVNZXNzYWdlRXZlbnQgfSBmcm9tIFwiLi9jb21wcmVoZW5kLWNsaWVudFwiO1xuXG5jb25zdCBzaW1wbGVQYXlsb2FkOiBUcmFuc2NyaWJlTWVzc2FnZUV2ZW50ID0ge1xuICAgIFwiUmVzdWx0c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiQWx0ZXJuYXRpdmVzXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiSXRlbXNcIjogW10sXG4gICAgICAgICAgICAgICAgICAgIFwiVHJhbnNjcmlwdFwiOiBcIkhlbGxvLiBNeSBuYW1lIGlzIFN0ZXZlIEhhbnNlbiBhbmQgSSdtIHJlc2lkaW5nIG9uIDEyMyBNYWluIFN0cmVldCwgTG9zIEFuZ2VsZXMgWmlwIGNvZGUgOTAyMTAuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJFbmRUaW1lXCI6IDkuNTU1LFxuICAgICAgICAgICAgXCJJc1BhcnRpYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcIlJlc3VsdElkXCI6IFwiMjlkNmFhZGEtNjdlNC00MTRlLTk2YzQtZjZjYTkyYzZlYzk3XCIsXG4gICAgICAgICAgICBcIlN0YXJ0VGltZVwiOiAwLjkzXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwic3BlYWtlck5hbWVcIjogXCI2MTkwMGM3Yy01MGZmLTRjMGYtODIxOS1kODZmMjFkNzNhMGNcIixcbiAgICBcImNhbGxJZFwiOiBcImFiY2RlMTIzNFwiLFxuICAgIFwiZXZlbnRUaW1lc3RhbXBcIjogXCIyMDIyLTExLTAyVDAxOjM0OjMyLjk3M1pcIlxufTtcblxudGVzdChcImNhbiBkZWlkIHN0YW5kYXJkIHBheWxvYWQsIGNoZWNrIGNvbnRlbnRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGRlaWRUcmFuc2NyaWJlTWVzc2FnZUV2ZW50O1xuICAgIGNvbnN0IHRlc3RQYXlsb2FkID0gc2ltcGxlUGF5bG9hZDtcbiAgICBjb25zdCBkZWlkZWRQYXlsb2FkID0gYXdhaXQgZGVpZFRyYW5zY3JpYmVNZXNzYWdlRXZlbnQodGVzdFBheWxvYWQpO1xuICAgIGNvbnN0IGRlaWRlZEV4cGVjdGVkVHJhbnNjcmlwdCA9IFwiSGVsbG8uIE15IG5hbWUgaXMgW05BTUVdIGFuZCBJJ20gcmVzaWRpbmcgb24gW0FERFJFU1NdLCBMb3MgQW5nZWxlcyBaaXAgY29kZSA5MDIxMC5cIjtcbn0pO1xuXG4iXX0=