import '../../scss/main.scss';
function loadMainHTML() {
    async function loadHTML(fragmentPath, containerId) {
        try {
            const response = await fetch(fragmentPath);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${fragmentPath}: ${response.statusText}`);
            }
            const html = await response.text();
            console.log(`Loaded HTML from ${fragmentPath}`);
            document.getElementById(containerId).innerHTML = html;
        } catch (error) {
            console.error(`Error loading HTML for ${containerId}:`, error);
        }
    }
      
      document.addEventListener("DOMContentLoaded", () => {
        loadHTML('./src/html/header.html', 'header');
        loadHTML('./src/html/home.html', 'main');
        // loadHTML('/src/blocks/footer.html', 'footer');
      });
    
}

export default loadMainHTML