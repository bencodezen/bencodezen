const { Client } = require('@notionhq/client')

exports.handler = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const databaseId = '52fcfd11b497413387ec15c9db5f4bd6'
  const databaseContent = await notion.databases.query({
    database_id: databaseId
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
        publishUrl: item.properties['Publishing URL'].url,
        title: item.properties.Name.title[0].text.content,
        description:
          item.properties.Description.rich_text.length > 0
            ? item.properties.Description.rich_text[0].text.content
            : ''
      }
    })

  return {
    statusCode: 200,
    body: JSON.stringify(finalResults)
  }
}
