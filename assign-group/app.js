const AWS = require("aws-sdk");
const cognitoIdp = new AWS.CognitoIdentityServiceProvider();

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.handler = async (event, context) => {
    // const {userPoolId, userName} = event;
    console.log(`request atts ${JSON.stringify(event.request.userAttributes)}`);
    // await addUserToGroup('hvgn-view', userPoolId, userName);
    return;
};

const addUserToGroup = (groupName, userPoolId, username) => {

    const params = {
        GroupName: groupName,
        UserPoolId: userPoolId,
        Username: username,
      };
    return cognitoIdp.adminAddUserToGroup(params).promise();
};
