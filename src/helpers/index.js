/**
 * generate uuid4 for the key property
 * got from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
 */
export const generateUUID = () => {
  let d = new Date().getTime();
  // Time in microseconds since page-load or 0 if unsupported
  let d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : ((r & 0x7) | 0x8)).toString(16);
  });
};

export const getFilteredPosts = (searchString, posts) => {
  if (searchString.length >= 3) {
    const regEx = new RegExp(searchString, 'gmi');

    return posts.filter((post) => ((regEx.test(post.title)) || (regEx.test(post.body.replace(/(?:\r\n|\r|\n)/g, ' ')))));
  }

  return posts;
};
