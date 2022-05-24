export default async function submitData(url, uName, uScore) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ user: uName, score: uScore }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((replay) => replay.json());
}