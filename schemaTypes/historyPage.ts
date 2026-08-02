import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'historyPage',
    title: 'History Page',
    type: 'document',
    // This is a singleton — only one document of this type should ever exist.
    // Enforce that in your Studio structure config (deskStructure.ts) by
    // pinning it to a single non-creatable list item.
    fields: [
        defineField({
            name: 'ameHistory',
            title: 'AME Church History',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Rich text — use the toolbar to create real paragraphs, headings, and bold text.',
        }),
        defineField({
            name: 'layOrgHistory',
            title: 'Lay Organization History',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Rich text — break long history into separate paragraph blocks using Enter, not run-on sentences.',
        }),
        defineField({
            name: 'conferenceHistory',
            title: 'West Coast Conference History',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'milestones',
            title: 'Milestones / Timeline',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'year', title: 'Year', type: 'string', validation: (Rule) => Rule.required() }),
                        defineField({ name: 'description', title: 'Description', type: 'string', validation: (Rule) => Rule.required() }),
                    ],
                    preview: {
                        select: { title: 'year', subtitle: 'description' },
                    },
                },
            ],
            description: 'Shown as a visual timeline — one entry per notable year/event.',
        }),
    ],
    preview: {
        prepare() {
            return { title: 'History Page' };
        },
    },
});