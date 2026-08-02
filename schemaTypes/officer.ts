import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'officer',
    title: 'Officer',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'Determines which section of the Officers page this appears in (only relevant for conference-wide officers — leave as Executive for district officers).',
            options: {
                list: [
                    { title: 'Executive', value: 'executive' },
                    { title: 'District', value: 'district' },
                    { title: 'Program', value: 'program' },
                ],
                layout: 'radio',
            },
            initialValue: 'executive',
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Controls display order across the site (ascending).',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'district',
            title: 'District',
            type: 'string',
            description: 'Leave blank for conference-wide officers shown on the homepage. Set to a district name to show this officer only on that district\'s page.',
            options: {
                list: ['Lakeland District', 'St. Petersburg District', 'Tampa District'],
            },
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'title' },
    },
});