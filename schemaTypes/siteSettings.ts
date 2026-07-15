import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({ name: 'localLayOrgsCount', title: 'Local Lay Organizations', type: 'number' }),
        defineField({ name: 'districtsCount', title: 'Annual Conference Districts', type: 'number' }),
        defineField({ name: 'countiesCount', title: 'Florida Counties Served', type: 'number' }),
        defineField({ name: 'newsletterPdfUrl', title: 'Newsletter PDF URL', type: 'url' }),
        defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    ],
})