exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  console.log(`i'm a log message from the hello-world function!`);
  twiml.say(`Hello ${event.FirstName}!`);
  callback(null, twiml);
};
