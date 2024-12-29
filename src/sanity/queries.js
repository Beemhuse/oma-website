export const programQuery = `*[_type == "program" && !(_id in path("drafts.**"))]{
    image,
    title,
    description,
  }`
export const blogQuery = `*[_type == "blog" && !(_id in path("drafts.**"))]{
  title,
  slug,
  "imageSrc": mainImage.asset->url,
  "author": author->name,
"description": content,
  "date":publishedAt,
"categories": categories[]->title // Fetch category titles
}`