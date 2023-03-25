import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "kkdn5ro1",
  dataset: "production",
  useCdn: true,
  apiVersion: '2022-01-12',
})

// helper function(getting the sanity url and convert to regular url)
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);

// Run sanity cors add http://localhost:3000 in sanity dir to add CORS origin

export default client;