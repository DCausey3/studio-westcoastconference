import { defineField, defineType } from 'sanity';
export const districtDocument = defineType({
    name: 'districtDocument',
    title: 'District Document',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'district', title: 'District', type: 'string', options: { list: ['Lakeland District', 'St. Petersburg District', 'Tampa District'] } }),
        defineField({ name: 'date', title: 'Date Label', type: 'string', description: 'Display text, e.g. "Updated February 2026"' }),
        defineField({ name: 'file', title: 'File', type: 'file', validation: (Rule) => Rule.required() }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'district' },
    },
});