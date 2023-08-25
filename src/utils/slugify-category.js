const slugifyCategory = (category) => category.toLowerCase().replace(/\s/g, '-');

module.exports = slugifyCategory;
