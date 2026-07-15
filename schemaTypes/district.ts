import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'district',
    title: 'District',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }), // e.g. "Lakeland District"
        defineField({ name: 'nickname', title: 'Nickname', type: 'string' }), // e.g. "The Lively Lakeland District"
        defineField({ name: 'president', title: 'President', type: 'string' }),
        defineField({
            name: 'counties',
            title: 'Counties',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
})