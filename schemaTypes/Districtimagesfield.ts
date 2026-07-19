import { defineField,defineArrayMember } from 'sanity';
// Add this field to your existing `district` schema in the Studio repo.
// Each image can carry its own label/caption for the carousel.

// Add this field to your existing `district` schema in the Studio repo.
// Each image can carry its own label/caption for the carousel.

defineField({
    name: 'images',
    title: 'District Images',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'image',
            name: 'districtImage',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label / Caption',
                    type: 'string',
                    description: 'Shown as an overlay on the carousel slide, e.g. "Annual Retreat 2025"',
                }),
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'For accessibility — describe what\'s in the image',
                    validation: (Rule) => Rule.required(),
                }),
            ],
            preview: {
                select: { title: 'label', media: 'asset' },
            },
        }),
    ],
});