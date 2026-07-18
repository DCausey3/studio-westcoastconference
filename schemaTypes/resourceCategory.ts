import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'resourceCategory',
  title: 'Resource Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls display order across the site (ascending).',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'resourceItem',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: ['PDF', 'Video', 'Slides', 'Form', 'Document'],
              },
            },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'category' },
  },
});
