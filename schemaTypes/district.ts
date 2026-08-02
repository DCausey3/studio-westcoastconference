import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'district',
    title: 'District',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'president',
            title: 'President',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Controls display order across the site (ascending).',
        }),
        defineField({
            name: 'nickname',
            title: 'Nickname',
            type: 'text',
            description: 'A fun, memorable tagline for the district, e.g. "The Lively Lakeland District"',
        }),
        defineField({
            name: 'counties',
            title: 'Counties Served',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Large banner image shown at the top of this district\'s page and on its card on the districts landing page.',
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'president' },
    },
});