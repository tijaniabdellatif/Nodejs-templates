const endpoint = 'https://puzzle.mead.io/puzzle';
const forcast = '/weather?address=Boston';
const news = '/articles';
const morroco = '/feeds?country=';
const form = document.querySelector('#form');
// Form
const fetchData = async (uri) => {

    const response = await fetch(uri);
    if(!response.ok){
        console.log('Unable to reach the server');
    }
    else if(response.status === 200 && response.ok){
        const data = await response.json();
        return data;
    }
    else {
        console.log('Something went wrong');
    }
   
}

form.addEventListener('submit',(e) => {
 
    e.preventDefault();
    
    const inputvalue = form.location.value;

    if(inputvalue === ''){

        alert('Fill the inout');
    }
    else {
        fetchData(morroco+inputvalue).then(data => {

    
            if(data.error){
        
               console.log(error);
            }
        
            else {
        
                const {news:{results}} = data;
                
        
                results.forEach(elem => {
                    const {name,description,url} = elem
                    const card = document.querySelector('.card');

                    card.innerHTML = `<div class="card-img">
                    <h5 class="title-card">${name}</h5>
                    <img src="" />
               </div>
              
               <div class="card-container">
                   <p class="card-description">${description}</p>
                   <p class="card-anchor"><a href="${url}" target="_blank">view more ...</a></p>
               </div>`;
                  
                })
            }
        
        })
    }
    
})


window.addEventListener('DOMContentLoaded',() => {
    fetchData(morroco+'ma').then(data => {

    
        if(data.error){
    
           console.log(error);
        }
    
        else {
    
            const {news:{results}} = data;
        
            const container = document.querySelector('.card-containers');
    
            results.forEach(elem => {
    
                const card = document.createElement('div');
                        card.classList.add('card');
                        const {name,description,url} = elem
                        let html = `
                        <div class="card-img">
                        <h5 class="title-card">${name}</h5>
                        <img src="" />
                   </div>
                  
                   <div class="card-container">
                       <p class="card-description">${description}</p>
                       <p class="card-anchor"><a href="${url}" target="_blank">view more ...</a></p>
                   </div>
                        `;
                
                        card.innerHTML = html;
                        container.appendChild(card);
            })
        }
    
    })
    
    fetchData(news).then(data => {
        if(data.error){
    
            console.log(data.error);
        }
        else {
    
          const {allnews} = data;
          const parent = document.querySelector('.like');
    
          const rawData = allnews.news.filter(element => {
    
            return element.image_url !== null;
          })
        
          console.log(rawData);
          
             rawData.forEach(element => {
    
                const card = document.createElement('div');
                card.classList.add('like-card');
                const {image_url,description,link,category} = element;
        
                    let html = `
                    <img src="${image_url}" />
                    <p class="desc">${description.slice(0,60)}</p>
                    <p class="tags"><a href="${link}">${category[0]}</a></p>
                    `;
    
                    card.innerHTML = html;
                    parent.appendChild(card);
                   
             })
    
            
    
            
        }
    
    })

    fetchData(forcast).then(data => {
    
        if(data.error){
    
            console.log(data.error);
        }
        else {
    
            console.log(data.location);
            console.log(data.forcast);
        }
    })
})
