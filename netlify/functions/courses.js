const { Client } = require('@notionhq/client')

exports.handler = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = '52fcfd11b497413387ec15c9db5f4bd6'
  const databaseContent = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'End Date',
        direction: 'descending'
      }
    ]
  })

  const finalResults = databaseContent.results
    .filter((item) => {
      const typeList = item.properties.Type.multi_select

      return typeList.find((type) => type.name === 'Course')
    })
    .map((item) => {
      // Final form of data that's needed by the UI
      return {
        id: item.id,
        endDate: item.properties['End Date'].date.start,
        platform: item.properties.Platform.select.name,
        publishUrl: item.properties['Publish URL'].url,
        title: item.properties.Name.title[0].text.content
      }
    })

  return {
    statusCode: 200,
    body: JSON.stringify(finalResults)
  }
}
