"use strict";

const AWS = require('aws-sdk');

const getUserById = async (event) => {
  
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: "User",
    Key: {
      id: event.pathParameters.id,
    }
  }

  const results = await dynamodb.get(params).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(results.Item),
  };
};

module.exports = {
  handler: getUserById,
};
