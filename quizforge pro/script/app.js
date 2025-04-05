import { AuthManager } from './core/auth.js';
import { loadPage } from './utils/dom.js';
import { CONFIG } from '../config.js';

// Initialize auth
const authManager = new AuthManager();

// Navigation handler
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', async (e) => {
    const page = e.target.dataset.page;
    await loadPage(page);
  });
});

// Initial load
window.addEventListener('DOMContentLoaded', async () => {
  await loadPage('welcome');
});