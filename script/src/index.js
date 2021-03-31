import TargetClient from "@adobe/target-nodejs-sdk";
import RULES from "./rules";

const createTargetClient = () => {
  return new Promise(resolve => {
    const result = TargetClient.create({
      client: "targettesting",
      organizationId: "74F652E95F1B16FE0A495C92@AdobeOrg",
      logger: console,
      decisioningMethod: "on-device",
      artifactPayload: RULES,
      events: {
        clientReady: () => resolve(result)
      }
    });
  });
};

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const headers = {
    headers: { 
      "content-type": "application/json"
    }
  };
  const body = await request.json();
  const response = await createTargetClient()
  .then(client => client.getOffers({request: body}))
  .then(deliveryResponse => deliveryResponse.response)
  .catch(error => error);

  return new Response(JSON.stringify(response), headers);
}
