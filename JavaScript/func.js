fetch('JSON/portfolio.json')
    .then(response => response.json())
    .then(data => {
        const portfolioContainer = document.getElementById('portfolio-container');
        data.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('col-sm-6', 'col-md-4', 'col-lg-3'); 
            portfolioItem.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="${item.thumbnail}" alt="${item.title}" class="bd-placeholder-img card-img-top">
                    <div class="card-body text-center">
                        <h2 class="card-title">${item.title}</h2>
                        <p class="card-text">${item.summary}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="${item.source}" class="btn btn-sm btn-outline-secondary">code</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            portfolioContainer.appendChild(portfolioItem);
        });
    })
    .catch(error => console.error('エラー:', error));

