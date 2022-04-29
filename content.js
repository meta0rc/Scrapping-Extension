const div = document.createElement('div')
const styled = document.createElement('style')
const popup = document.createElement('div')


document.body.append(div)
document.body.append(popup)
document.body.append(styled)


const divConfigs = { 

    title: 'Scrapping Urls', 
    class : 'getid', 
    style :  ` 

        .popupDiv { 
           
            width: 100%;
            padding: 5%;
            display: flex;
            position: fixed;
            font-size: 1.2em;
            background: #505050;
            /* text-align: center; */
            color: #fff;
            top: 0;
            line-height: 2;
            z-index: 999;
            justify-content: center;

        }
        .getid { 
            z-index: 999;
            position: fixed;
            bottom: 33px;
            background: #979595;
            left: 25px;
            font-size: 15px;
            color: #000;
            border-radius: 27px;
            padding: 16px 34px;
                }

            .getid:hover{ 
                cursor : pointer;
            }
            .activePopup {
                display: none;
            }
            ` ,

}


div.innerHTML = divConfigs.title

div.classList = divConfigs.class


popup.classList = 'popupDiv activePopup'

styled.innerHTML = divConfigs.style


div.addEventListener('click', ()=> {

        popup.classList.remove('activePopup')

        div.innerHTML = 'Scrapping'

        t = document.querySelector("#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").value
        
        search = 'https://' + t.substr(5, t.length);
        
        a = document.querySelectorAll('a')

        let index = 0;

        base = `https://www.google.com/search?q=${search}&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=${index}&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1`
        
        a.forEach(l => {
    
            link = l.getAttribute('href')
        
            if(typeof(link) == 'string') {
        
                if(link.includes(search) && !link.includes('webcache') && !link.includes('view')){
                    
                    popup.innerHTML += link + '<br>'

                    arr = []

                   

                    localStorage.setItem('links', ...link)

                    
                    //window.open(base, 'target="_blank"')
                    
                }
                
            }
            
        })
        
    
})










