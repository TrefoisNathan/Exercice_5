
console.log('Exercice 5');

        function createCard(title, imgSrc, href, duration) {
            let cardContainer = document.createElement('div');
            let titleElement = document.createElement('h3');
            let durationElement = document.createElement('p');
            let cardDiv = document.createElement('div');
            let imgParagraph = document.createElement('p');
            let anchorElement = document.createElement('a');
            let imgElement = document.createElement('img');  
                cardContainer.className = 'card-container';
                titleElement.innerText = title;
                imgElement.src = imgSrc;
                imgElement.alt = title;
                anchorElement.href = href;
                durationElement.innerText = duration;
            
            anchorElement.appendChild(imgElement);
            imgParagraph.appendChild(anchorElement);
            cardDiv.appendChild(imgParagraph);
            cardDiv.appendChild(titleElement);
            cardDiv.appendChild(durationElement);
            cardContainer.appendChild(cardDiv);
            return cardContainer;
        }

    let cardv1 = createCard("Tarte aux pommes", "https://via.placeholder.com/158", "./recettes/tarte-aux-pommes.html", "15 minutes de préparation");
    let cardv2 = createCard("Gateau au chocolat", "https://via.placeholder.com/158", "./recettes/gateau-au-chocolat.html", "20 minutes de préparation");
    let cardv3 = createCard("Gateau marbré", "https://via.placeholder.com/158", "./recettes/tarte-aux-groseilles.html", "20 minutes de préparation");
    let cardv4 = createCard("Tarte aux groseilles", "https://via.placeholder.com/158", "./recettes/muffins-myrtilles.html", "25 minutes de préparation");

    document.body.append(cardv1);
    document.body.append(cardv2);
    document.body.append(cardv3);
    document.body.append(cardv4);
