import { ENDPOINT, UNSPLASH_ID } from '../Env';

const tipsUri = `${ENDPOINT}/tips`;
const unsplashUri = 'https://api.unsplash.com/photos/random?query=fruits';

export async function get() {
  const tipsRes = await fetch(tipsUri, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });

  const unsplash = await fetch(unsplashUri, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ID}` },
  })
    .then((res) => res.json())
    .then((data) => ({
      // Get the photo link and author
      image: data.urls.regular,
      author: {
        user: data.user.name,
        link: data.user.links.html,
      },
    }))
    .catch((err) => {
      console.error(`Unsplash error: ${err.code}`);
      return {
        image: '/images/cover/phone.jpg',
        author: null,
      };
    });

  if (tipsRes.status === 404) {
    return { body: [] };
  }

  const tips = await tipsRes.json();

  return {
    status: tipsRes.status,
    body: {
      tips,
      unsplash,
    },
  };
}
