// This is a basic Service Worker to make the app installable
self.addEventListener('fetch', (event) => {
    // We don't need to cache anything for now, 
    // just having this listener makes it "Installable"
    return;
});