const { schedule } = require('@netlify/functions')

const handler = function(event, context) {
  console.log('Received event:', event)

  return {
    statusCode: 200
  }
}

module.exports.handler = schedule('23 * * * *', handler)
