export async function callLambdaInNext(url, method, data) {
  try {
    const fetchUrl = process.env.NEXT_PUBLIC_API_URL + url;
    const response = await fetch(fetchUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
