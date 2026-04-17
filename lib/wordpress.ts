const API = "https://public-api.wordpress.com/rest/v1.1/sites/dennerzacarias.wordpress.com";

export async function getPosts() {
  const res = await fetch(`${API}/posts`);
  return res.json();
}
