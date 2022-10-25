export default {
  name: 'testimonials',
  title: 'Testimonials',
  types: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
};
