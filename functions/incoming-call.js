exports.handler = (context, event, callback) => {
    const twiml = new Twilio.twiml.VoiceResponse();
    // TODO: this should be name of current talk
    twiml.dial().conference("sample-conference-name");
    console.log(`TwiML is ${twiml}`);
    return callback(null, twiml);
};