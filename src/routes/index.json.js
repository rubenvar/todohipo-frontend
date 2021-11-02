const uri = 'http://localhost:3000/tips';

export async function get(request) {
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.status === 404) {
    return { body: [] };
  }

  return {
    status: response.status,
    body: await response.json(),
  };
}
