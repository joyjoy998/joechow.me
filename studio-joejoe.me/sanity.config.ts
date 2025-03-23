import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'joejoe.me',
  projectId: '7o3ajahu',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [...schemaTypes],
  },
})
