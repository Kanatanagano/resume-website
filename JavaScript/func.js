fetch('JSON/portfolio.json')
    .then(response => response.json())
    .then(data => {
        const portfolioContainer = document.getElementById('portfolio-container');
        data.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.summary}</p>
                <img src="${item.thumbnail}" alt="${item.title}">
                <a href="${item.source}">詳細を見る</a>
            `;
            portfolioContainer.appendChild(portfolioItem);
        });
    })
    .catch(error => console.error('エラー:', error));

