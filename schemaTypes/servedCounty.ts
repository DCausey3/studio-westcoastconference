import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servedCounty',
  title: 'Served County',
  type: 'document',
  fields: [
    defineField({
      name: 'countyName',
      title: 'County Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'countyName' },
  },
});
