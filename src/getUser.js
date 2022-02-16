"use strict";

const AWS = require('aws-sdk');

const getUser = async (event) => {
  
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let users;

  try {
  const results = await dynamodb.scan({TableName: "User"}).promise()

  users = results.Items;

  } catch (error){
    console.log(error);
  }
  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};

module.exports = {
  handler: getUser,
};
