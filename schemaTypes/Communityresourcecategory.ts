import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'communityResourceCategory',
    title: 'Community Resource Category',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            title: 'Category Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Controls display order (ascending). Crisis/emergency resources should be order 1.',
        }),
        defineField({
            name: 'items',
            title: 'Organizations',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'communityResourceItem',
                    fields: [
                        { name: 'title', title: 'Organization Name', type: 'string' },
                        { name: 'description', title: 'What They Help With', type: 'text' },
                        { name: 'phone', title: 'Phone', type: 'string' },
                        { name: 'url', title: 'Website URL', type: 'url' },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: 'category' },
    },
});