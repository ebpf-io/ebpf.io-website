export default function blogFilterToSlug(item) {
    return item === '*' ? '/blog/' : `/blog/categories/${item.toLowerCase().replace(/\s/g, '-')}/`;
  }