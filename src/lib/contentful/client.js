const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'osa9szwur3cb',
  accessToken: 'maEy9u6BFyYAWn_QrHL4pvZi6zEMZGLCD_ICiCCq9nU'
});

export const previewClient = contentful.createClient({
  host: 'preview.contentful.com',
  space: 'osa9szwur3cb',
  accessToken: 'mhilaPhZ_WaA03Xy10otG67i4UwiLoELdO20_4mFHXo'
})