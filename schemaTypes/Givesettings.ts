import { defineField, defineType } from "sanity";

// Singleton: create ONE "Giving settings" document in Studio.
// (Optional: hide "Create new" for this type in your desk structure.)
export default defineType({
  name: "giveSettings",
  title: "Giving settings",
  type: "document",
  fields: [
    defineField({
      name: "intro",
      title: "Intro text",
      type: "text",
      rows: 4,
      description: "Shown under the page headline. Mention scholarships and workshops.",
    }),
    defineField({
      name: "givelifyUrl",
      title: "Givelify page link",
      type: "url",
      description:
        "Direct link to the WCCLO's Givelify page, if it has one. Leave blank to send people to givelify.com with search instructions.",
    }),
    defineField({
      name: "zelleEmail",
      title: "Zelle email",
      type: "string",
      validation: (r) => r.email(),
    }),
    defineField({
      name: "cashAppTag",
      title: "Cash App $cashtag",
      type: "string",
      description: "Include the $ sign, e.g. $givetothewcclo",
      validation: (r) => r.regex(/^\$[A-Za-z0-9_]+$/, { name: "cashtag" }),
    }),
    defineField({
      name: "checkRecipient",
      title: "Check: send to (name and title)",
      type: "string",
      description: "e.g. LaTanya M. Edwards, Financial Secretary",
    }),
    defineField({
      name: "checkAddress",
      title: "Check: mailing address",
      type: "text",
      rows: 3,
      description:
        "Public on the website. Confirm the recipient is comfortable with this, or use a PO box. If left blank, the check section tells people to contact the WCCLO.",
    }),
  ],
  preview: { prepare: () => ({ title: "Giving settings" }) },
});