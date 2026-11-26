export async function getSupportInfo() {
    let response = await fetch("https://dummyjson.com/users");
  return response.json();
}
