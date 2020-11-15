exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
   body: "Hello, World. " + Math.random() + '\n' + new Date().toLocaleString()
  });
}
