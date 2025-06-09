async function pushToGitHub(filename, content, repo, path = '') {
  const url = `https://api.github.com/repos/${repo}/contents/${path}${filename}`;
  const message = `Add ${filename} via Nexus Lobo MVP`;

  const encoded = btoa(unescape(encodeURIComponent(content)));

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      content: encoded
    })
  });

  const result = await res.json();
  return result;
}
