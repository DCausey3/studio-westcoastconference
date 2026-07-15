import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'officer',
    title: 'Officer',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }), // e.g. "President"
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
        }), // optional — falls back to initials if empty
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
})