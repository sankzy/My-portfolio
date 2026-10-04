const layoutRoot = new URL('partials/', document.currentScript.src);

async function loadLayout(selector, partialName) {
    const placeholder = document.querySelector(selector);
    if (!placeholder) return;

    const response = await fetch(new URL(partialName, layoutRoot));
    if (!response.ok) {
        throw new Error(`Unable to load ${partialName}: ${response.status}`);
    }

    placeholder.outerHTML = await response.text();
}

async function initializeLayout() {
    try {
        await Promise.all([
            loadLayout('[data-site-header]', 'header.html'),
            loadLayout('[data-site-footer]', 'footer.html'),
        ]);

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
        currentLink?.classList.add('active');
        currentLink?.setAttribute('aria-current', 'page');
    } catch (error) {
        console.error('The shared page layout could not be loaded.', error);
    }
}

initializeLayout();
