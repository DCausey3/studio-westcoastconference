import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'missionPage',
  title: 'Mission Page',
  type: 'document',
  // Singleton — restrict creation to one document via Studio structure config.
  fields: [
    defineField({ name: 'missionStatement', title: 'Mission Statement', type: 'text' }),
    defineField({ name: 'visionStatement', title: 'Vision Statement', type: 'text' }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Mission Page' };
    },
  },
});
