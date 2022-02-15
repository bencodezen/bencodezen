const fetch = require('node-fetch')
const { schedule } = require('@netlify/functions')

const handler = async function() {
  console.log('Automated build triggered.')

  await fetch('https://api.netlify.com/build_hooks/620bd20bc7433d2230c94653', {
    method: 'POST'
  }).then((response) => {
    console.log('Build hook response:', response.json())
  })

  return {
    statusCode: 200
  }
}

module.exports.handler = schedule('0 0 * * 1,3,5', handler)
