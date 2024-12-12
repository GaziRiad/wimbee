import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careers',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'Page Tag',
      type: 'internationalizedArrayString',
      initialValue: 'CAREERS',
    }),
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'internationalizedArrayString',
      initialValue: 'Careers at Wimbee are paths to growth and impact.',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sideText',
      title: 'Side Text',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'internationalizedArrayString',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'mainText',
      title: 'Main Text',
      type: 'internationalizedBlockContent', // Use the new type here
    }),

    defineField({
      name: 'positionsSection',
      title: 'Open Position Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Section Tag',
          type: 'internationalizedArrayString',
          initialValue: 'OPEN POSITIONS',
        }),
        defineField({
          name: 'positions',
          title: 'Positions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Position title',
                  type: 'internationalizedArrayString',
                }),
                defineField({
                  name: 'date',
                  title: 'Date',
                  type: 'date',
                }),
                defineField({
                  name: 'place',
                  title: 'Place Description',
                  type: 'internationalizedArrayString',
                }),
                defineField({
                  name: 'company',
                  title: 'Company Name',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'internationalizedArrayString',
        }),
      ],
    }),
  ],
})