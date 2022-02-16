const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const updateUser = async (event) => {
  const data = JSON.parse(event.body);

  data.id = event.pathParameters.id;
  data.updatedAt = new Date().toISOString();
  
  const params = {
    TableName: "User",
    Item: data
  };

 const result = await dynamodb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Item),
  };
};

module.exports = {
  handler: updateUser,
};
