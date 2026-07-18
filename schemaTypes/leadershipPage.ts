import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'leadershipPage',
  title: 'Leadership Page',
  type: 'document',
  // Singleton — restrict creation to one document via Studio structure config.
  // District president names come from the `district` schema's `president` field.
  fields: [
    defineField({ name: 'intro', title: 'Intro', type: 'text' }),
    defineField({ name: 'executiveBoardDescription', title: 'Executive Board Description', type: 'text' }),
    defineField({ name: 'localOrgsDescription', title: 'Local Organizations Description', type: 'text' }),
  ],
  preview: {
    prepare() {
      return { title: 'Leadership Page' };
    },
  },
});
