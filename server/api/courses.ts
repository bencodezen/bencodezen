import { Client } from '@notionhq/client'

export default defineEventHandler(async (event) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  console.log(process.env.NOTION_API_KEY)
  const databaseId = '52fcfd11b497413387ec15c9db5f4bd6'
  const databaseContent = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: 'Type',
          multi_select: {
            contains: 'Course',
          },
        },
      ],
    },
  })

  const finalResults = databaseContent.results.map((item) => {
    // Final form of data that's needed by the UI
    return {
      id: item.id,
      publishUrl: item.properties['Publishing URL'].url,
      title: item.properties.Name.title[0].text.content,
      description:
        item.properties.Description.rich_text.length > 0
          ? item.properties.Description.rich_text[0].text.content
          : '',
    }
  })

  return finalResults
})
