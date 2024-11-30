import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'boosters',
  title: 'Boosters Page',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'Page Tag',
      type: 'string',
      initialValue: 'BOOSTERS',
    }),
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      initialValue: "Innovation isn't just a goal—it's how we lead.",
    }),
    defineField({
      name: 'products',
      title: 'Product Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Product Name',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Product Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
      initialValue: [
        {
          name: 'ANALYTICA',
          description:
            'Discover Analytica, an advanced analytics platform that provides a centralized, unified view of your business. With its comprehensive 360° cockpit dashboard, Analytica enables deep analysis across HR, sales, operations, and finance data. It delivers precise, actionable insights for informed decision-making. Easy to integrate and customize, Analytica saves both time and money while ensuring data security. Transform your data into strategy and accelerate your decision-making process with Analytica.',
        },
        {
          name: 'PROFILINK',
          description:
            'Profilink is an innovative recruitment platform designed to save you time and optimize your hiring process. Using advanced AI technology, Profilink quickly and automatically extracts key information from resumes and job descriptions, regardless of format or language, ensuring intelligent and precise matching between candidates and job openings. Our user-friendly interface allows recruiters to refine matching criteria, delivering tailored and accurate results. By streamlining every step of the recruitment process, Profilink helps you find the ideal talent while safeguarding data security and confidentiality.',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'SEO Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'SEO Description',
          type: 'text',
        }),
      ],
    }),
  ],
})