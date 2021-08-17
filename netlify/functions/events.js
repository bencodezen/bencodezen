const airtable = require('airtable')

exports.handler = (event, context, callback) => {
  airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
  })

  const base = airtable.base('apperZstCqJMt9MuV')
  const eventData = []

  base('Events')
    .select({
      view: 'Public Events'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach((record) => {
          eventData.push(record)
        })
        fetchNextPage()
      },
      function done(err) {
        if (err) {
          console.error(err)
        }
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(eventData)
        })
      }
    )
}
