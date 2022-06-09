export default function parseLinkHeader(linkHeader: string) {
  const linkHeadersArray = linkHeader
    .split(', ')
    .map(header => header.split('; '));
  const linkHeadersMap = linkHeadersArray.map(header => {
    const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '');
    const thisHeaderUrl = header[0].slice(1, -1);
    const thisHeaderPage = thisHeaderUrl.split('_page=')[1].match(/^\d*/)?.[0];
    return [thisHeaderRel, thisHeaderPage];
  });
  return Object.fromEntries(linkHeadersMap);
}
