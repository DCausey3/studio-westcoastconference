import { defineType, defineField } from 'sanity';

// One document per photo. `order` controls display order everywhere;
// the home page teaser shows just the first 6, the /gallery page shows all.
export default defineType({
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'label',
            title: 'Label / Caption',
            type: 'string',
            description: 'Shown as an overlay caption, e.g. "2025 Annual Conference"',
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: "For accessibility — describe what's in the image",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: 'label', media: 'image' },
    },
});