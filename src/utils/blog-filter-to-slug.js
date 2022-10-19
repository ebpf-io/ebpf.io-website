import slugify from "slugify";

export default function blogFilterToSlug(item) {
  const category = slugify(item, {lower: true});
    return item === '*' ? '/blog/' : `/blog/categories/${category}/`;
  }