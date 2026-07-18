import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'church',
  title: 'Church',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'city', title: 'City', type: 'string' }),
    defineField({ name: 'state', title: 'State', type: 'string' }),
    defineField({ name: 'zip', title: 'Zip Code', type: 'string' }),
    defineField({ name: 'county', title: 'County', type: 'string' }),
    defineField({
      name: 'district',
      title: 'District',
      type: 'string',
      description: 'Free-text district label (e.g. "Tampa District") as used on the Churches page filters.',
    }),
    defineField({ name: 'pastor', title: 'Pastor', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'city' },
  },
});
