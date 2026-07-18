import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            description: 'Shown in browser tab and search results (50-60 chars ideal)',
        }),
        defineField({
            name: 'seoDescription',
            title: 'SEO Meta Description',
            type: 'text',
            description: 'Shown in search results (150-160 chars ideal)',
        }),
        defineField({
            name: 'heading',
            title: 'Page Heading',
            type: 'string',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
        }),
        defineField({
            name: 'congregationPhoto',
            title: 'Congregation Photo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            ],
        }),
        defineField({
            name: 'overviewParagraphs',
            title: 'Overview Paragraphs',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'coreValues',
            title: 'Core Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'description', title: 'Description', type: 'text' }),
                    ],
                },
            ],
        }),
    ],
})