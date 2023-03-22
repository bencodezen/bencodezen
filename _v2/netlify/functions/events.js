const { Client } = require('@notionhq/client')

exports.handler = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = '52fcfd11b497413387ec15c9db5f4bd6'
  const databaseContent = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Tags',
      multi_select: {
        contains: 'Public Schedule'
      }
    }
  })

  const finalResults = databaseContent.results.map((item) => {
    return {
      id: item.id,
      recordDate: item.properties['Record Date'],
      title: item.properties.Name.title[0].text.content,
      recording: {
        url: item.properties['Recording URL']?.url,
        date: item.properties['Recording Date']?.date
      },
      publishing: {
        url: item.properties['Publishing URL']?.url,
        date: item.properties['Publishing Date']?.date
      }
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(finalResults)
  }
}
