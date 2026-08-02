import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Used for both sorting and the displayed date on the Events page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
      defineField({
    name: 'district',
    title: 'District',
    type: 'string',
    description: 'Leave blank to show on the homepage gallery. Set to a district name to show only on that district\'s photo carousel.',
    options: {
        list: ['Lakeland District', 'St. Petersburg District', 'Tampa District'],
    },
}),
  ],
  preview: {
    select: { title: 'title', subtitle: 'location' },
  },
});
