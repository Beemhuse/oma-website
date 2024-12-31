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
export const plansQuery = `*[_type == "pricing" && !(_id in path("drafts.**"))]{
  _id,
  name,
  price,
  highlighted,
  benefits,
  "description": description,
}`
export const clientsQuery = `*[_type == "trustedClients" && !(_id in path("drafts.**"))]{
              name,
              "imageSrc": clientImage,
          }`
export const eventsQuery = `*[_type == "event" && !(_id in path("drafts.**"))]{
              title,
              slug,
              "imageSrc": imageUrl,
              "date": date,
              location,
              description,
              eventCategory,
              registrationLink
          }`