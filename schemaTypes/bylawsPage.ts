import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'bylawsPage',
  title: 'Constitution & Bylaws Page',
  type: 'document',
  // Singleton — restrict creation to one document via Studio structure config.
  fields: [
    defineField({
      name: 'wccBylawsFile',
      title: 'West Coast Conference Bylaws (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'connectionalBylawsFile',
      title: 'Connectional Lay ByLaws (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'districtBylawsFile',
      title: '11th Episcopal District ByLaws (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Constitution & Bylaws Page' };
    },
  },
});
