import { defineField, defineType } from 'sanity';

export const scholarship = defineType({
    name: 'scholarship',
    title: 'Scholarship',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'district', title: 'District', type: 'string', options: { list: ['Lakeland District', 'St. Petersburg District', 'Tampa District'] } }),
        defineField({ name: 'amount', title: 'Award Amount', type: 'string', description: 'e.g. "$500" or "Varies"' }),
        defineField({ name: 'deadline', title: 'Deadline', type: 'date' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'applicationFile', title: 'Application PDF', type: 'file' }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'district' },
    },
});
