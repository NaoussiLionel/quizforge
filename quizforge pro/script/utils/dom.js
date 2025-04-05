export async function loadPage(pageName) {
  try {
    const response = await fetch(`pages/${pageName}.html`);
    const html = await response.text();
    document.getElementById('content').innerHTML = html;
    window.scrollTo(0, 0);
  } catch (error) {
    console.error('Error loading page:', error);
  }
}