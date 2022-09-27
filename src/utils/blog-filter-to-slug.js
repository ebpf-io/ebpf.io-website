import slugify from "slugify";

export default function blogFilterToSlug(item) {
  const category = slugify(item, {remove: /[^a-z0-9\-]/g, lower: true});
    return item === '*' ? '/blog/' : `/blog/categories/${category}/`;
  }