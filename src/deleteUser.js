"use strict";

const AWS = require('aws-sdk');

const deleteUser = async (event) => {
  
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: "User",
    Key: {
      id: event.pathParameters.id,
    },
  };

  await dynamodb.delete(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({status: true}),
  };
};

module.exports = {
  handler: deleteUser,
};
