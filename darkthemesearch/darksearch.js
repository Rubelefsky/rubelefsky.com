document.addEventListener('DOMContentLoaded', function() {
    // Get the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    // Get DOM elements
    const resultsSearchInput = document.getElementById('results-search-input');
    const resultsSearchButton = document.getElementById('results-search-button');
    const resultsList = document.getElementById('results-list');
    
    // Define your site's searchable content
    const siteContent = [
        {
            title: "About Me",
            url: "#about",
            description: "Learn about my background in Cybersecurity and IT.",
            keywords: ["about", "bio", "background", "cybersecurity", "IT"]
        },
        {
            title: "My Blog",
            url: "https://www.rubelefskyblog.com",
            description: "Read my latest articles and thoughts on cybersecurity topics.",
            keywords: ["blog", "articles", "posts", "cybersecurity"]
        },
        {
            title: "GitHub Projects",
            url: "https://github.com/Rubelefsky",
            description: "Explore my open source projects and code repositories.",
            keywords: ["github", "code", "projects", "repository", "development"]
        },
        {
            title: "LinkedIn Profile",
            url: "https://www.linkedin.com/in/brandonsrubell/",
            description: "Connect with me professionally and see my work experience.",
            keywords: ["linkedin", "professional", "network", "experience", "resume"]
        },
        {
            title: "Resume",
            url: "https://www.rubelefskyazurecloud.net/",
            description: "View my professional resume and qualifications.",
            keywords: ["resume", "cv", "qualifications", "experience", "skills"]
        },
        {
            title: "Security Tools",
            url: "#security-tools",
            description: "Security tools and resources I've developed or recommend.",
            keywords: ["security", "tools", "resources", "cybersecurity"]
        }
        // Add more content as needed
    ];
    
    // Display the query
    if (query) {
        resultsSearchInput.value = query;
        performSearch(query);
    }
    
    // Function to perform search
    function performSearch(searchQuery) {
        // Clear previous results
        resultsList.innerHTML = '';
        
        const lowerCaseQuery = searchQuery.toLowerCase();
        let results = [];
        
        // Search through content
        siteContent.forEach(item => {
            // Check if query matches title, description, or keywords
            if (item.title.toLowerCase().includes(lowerCaseQuery) ||
                item.description.toLowerCase().includes(lowerCaseQuery) ||
                item.keywords.some(keyword => keyword.toLowerCase().includes(lowerCaseQuery))) {
                results.push(item);
            }
        });
        
        // Display results or no results message
        if (results.length > 0) {
            results.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.className = 'result-item';
                resultElement.innerHTML = `
                    <h2><a href="${result.url}" ${result.url.startsWith('http') ? 'target="_blank"' : ''}>${result.title}</a></h2>
                    <p>${result.description}</p>
                `;
                resultsList.appendChild(resultElement);
            });
        } else {
            resultsList.innerHTML = '<div class="no-results">No results found for your search. Try different keywords.</div>';
        }
    }
    
    // Add event listeners
    resultsSearchButton.addEventListener('click', function() {
        performSearch(resultsSearchInput.value);
    });
    
    resultsSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch(resultsSearchInput.value);
        }
    });
});