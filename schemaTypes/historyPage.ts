import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'historyPage',
  title: 'History Page',
  type: 'document',
  // Singleton — restrict creation to one document via Studio structure config.
  fields: [
    defineField({ name: 'ameHistory', title: 'AME History', type: 'text' }),
    defineField({ name: 'layOrgHistory', title: 'Lay Organization History', type: 'text' }),
    defineField({ name: 'conferenceHistory', title: 'Conference History', type: 'text' }),
    defineField({
      name: 'milestones',
      title: 'Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'milestone',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'History Page' };
    },
  },
});
