// https://images-api.nasa.gov/search?q=galaxy
document.addEventListener("DOMContentLoaded", () => {


const apiUrl = "https://images-api.nasa.gov/search?q=galaxy";
    
    let modal = document.getElementById("myModal");

    let span = document.getElementsByClassName("close")[0];

    setTimeout(function () {
       modal.style.display = "block"; 
    // window.alert('Hello');
    }, 1500);

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
    };

    fetch(apiUrl)
        .then(resp => resp.json())
        .then(info => {
            // console.log(info)
            // console.log(info.collection.items[0])

            let galInfo = info.collection.items
            // console.log(galInfo)

            const collection = document.querySelector('.collection');
            

            const cats = [
                {
                    data: [{
                        title: 'Meowlaxy',
                        date_created: '01/15/2022',
                        description: 'A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction'
                    }],
                    links: [{
                        href: 'https://wallpaperaccess.com/full/128460.jpg'
                    }],
                },
                {
                    data: [{
                        title: 'Guardian of the Galaxy',
                        date_created: '01/15/2022',
                        description: 'A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction'
                    }],
                    links: [{
                        href: 'https://cdn.wallpapersafari.com/96/69/jAaZ6I.jpg'
                    }],
                },
                {
                    data: [{
                        title: 'Catlaxy',
                        date_created: '01/15/2022',
                        description: 'A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction'
                    }],
                    links: [{
                        href: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701881159-692x376.jpg'
                    }]
                }
            ];

            let newGalaxy = [...galInfo]

            let slicedGalaxy = newGalaxy.slice(88, 100);
            // console.log(newGalaxy.slice(80, 100))

            let catsAdded = slicedGalaxy.concat(cats);

            // console.log(catsAdded)
            // console.log(newGalaxy)
            // console.log(newGalaxy[100])

            catsAdded.map(data => {
                // console.log(data)
                // console.log(data.links[0])

                const flipCard = document.createElement('div');
                flipCard.className = "flipCard";
                collection.append(flipCard);

                const flipInner = document.createElement('div');
                flipInner.className = "flipInner";
                flipCard.append(flipInner);

                const galFlipFront = document.createElement('div');
                galFlipFront.className = "galFlipFront";
                flipInner.append(galFlipFront);

                const flipBack = document.createElement('div');
                flipBack.className = "flipBack";
                flipInner.append(flipBack);

                const galName = document.createElement('h2');
                galName.className = "galName";
                galFlipFront.append(galName);

                const galImg = document.createElement('img');
                galImg.className = "galImg";
                galFlipFront.append(galImg);

                const galDate = document.createElement('p');
                galDate.className = "galDate";
                flipBack.append(galDate);

                const galDesc = document.createElement('p');
                galDesc.className = "galDesc";
                flipBack.append(galDesc);

                const likeButton = document.createElement('button');
                likeButton.className = "fas fa-rocket";
                flipBack.append(likeButton);

                const likeWord = document.createElement('p');
                likeWord.className = "likeWord";
                galFlipFront.append(likeWord);
                likeWord.textContent = "Likes:";

                const likeAmnt = document.createElement('p');
                likeAmnt.className = "likeAmnt";
                galFlipFront.append(likeAmnt);
                likeAmnt.textContent = Math.floor((Math.random() * 200) + 50);
                let clicked = true;

                


                function buttonClicking(clicked) {
                    clicked ? console.log("first click") : console.log("second click");
                    let likes = clicked ? parseInt(likeAmnt.innerText) + 1 : parseInt(likeAmnt.innerText) - 1;
                    likeAmnt.textContent = likes;
                };
                
                likeButton.addEventListener('click', () => {
                    buttonClicking(clicked);
                    clicked = !clicked
                });


             
                galName.textContent = data.data[0].title;
                galImg.src = data.links[0].href;
                galDate.textContent = data.data[0].date_created;
                galDesc.textContent = data.data[0].description;
            });
        });
    
});