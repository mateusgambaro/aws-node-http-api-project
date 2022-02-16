"use strict";

const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addUser = async (event) => {
  
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const {name} = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();

  const newUser = {
    id,
    name,
    createdAt,
  };

  await dynamodb.put({
    TableName: "User",
    Item: newUser
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newUser),
  };
};

module.exports = {
  handler: addUser,
};
