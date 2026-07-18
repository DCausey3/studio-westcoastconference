import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'officer',
  title: 'Officer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Determines which section of the Officers page this appears in.',
      options: {
        list: [
          { title: 'Executive', value: 'executive' },
          { title: 'District', value: 'district' },
          { title: 'Program', value: 'program' },
        ],
        layout: 'radio',
      },
      initialValue: 'executive',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls display order across the site (ascending).',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'title' },
  },
});
