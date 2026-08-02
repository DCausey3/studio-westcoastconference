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
        // Add/update these two fields on your existing gallery image schema
// (whatever type currently powers the homepage ImageCarousel).

        defineField({
            name: 'district',
            title: 'District',
            type: 'string',
            description: 'Set this to show the photo ONLY on that district\'s page carousel. Leave blank if this photo isn\'t district-specific.',
            options: {
                list: ['Lakeland District', 'St. Petersburg District', 'Tampa District'],
            },
        }),
        defineField({
            name: 'showOnHomepage',
            title: 'Show on Homepage Gallery',
            type: 'boolean',
            description: 'Turn on to also feature this photo in the main homepage gallery, regardless of whether it\'s tagged to a district.',
            initialValue: false,
        }),
    ],
    preview: {
        select: { title: 'label', media: 'image' },
    },
});