import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'missionPage',
    title: 'Mission Page',
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
        defineField({ name: 'heading', title: 'Page Heading', type: 'string' }),
        defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
        defineField({
            name: 'missionStatement',
            title: 'Mission Statement',
            type: 'text',
        }),
        defineField({
            name: 'visionStatement',
            title: 'Vision Statement',
            type: 'text',
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