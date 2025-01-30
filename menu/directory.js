const scriptUrls = [
    "https://raw.githubusercontent.com/yourusername/repo/main/script1.js",
    "https://raw.githubusercontent.com/yourusername/repo/main/script2.js",
    "https://raw.githubusercontent.com/yourusername/repo/main/script3.js"
];

async function loadAndRunScripts() {
    for (const url of scriptUrls) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to load ${url}`);
            const scriptText = await response.text();
            const scriptElement = document.createElement('script');
            scriptElement.textContent = scriptText;
            document.body.appendChild(scriptElement);
            console.log(`Loaded and executed: ${url}`);
        } catch (error) {
            console.error(error);
        }
    }
}

loadAndRunScripts();
