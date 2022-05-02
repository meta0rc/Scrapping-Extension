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
            position: absolute;
            overflow: scroll;
            font-size: 1.2em;
            background: #333;
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

        if(!localStorage.getItem('index') || localStorage.getItem('index') == NaN){

            localStorage.setItem('index', index)

        } 

        arr = []

        a.forEach(l => {
    
            link = l.getAttribute('href')
        
            if(typeof(link) == 'string') {
        
                if(link.includes(search) && !link.includes('webcache') && !link.includes('view')){
                    

                    arr.push(link)
                   
                    // localStorage.setItem('links')

                }
                
            }
            
        })

        arr.push(localStorage.getItem('links'))

        localStorage.setItem('links', JSON.stringify(arr))

        aux = parseInt(localStorage.getItem('index')) + 10

        localStorage.setItem('index', aux.toString());


        base = `https://www.google.com/search?q=${t}&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=${aux}&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1`
        


        if(document.body.innerText.includes('não encontrou nenhum documento correspondente')){

            valores = localStorage.getItem('links');

            vals = valores.replace(/[\\"]/g, '');

            novoarray = vals.split(',')

            novoarray.forEach(n => {
                
                t = n.replace('[', '')
                x = t.replace('null', '')
                j = x.replace(']', '')
                h = j.replace('[', '')
                
                popup.innerHTML += h + '<br>'

            })
            localStorage.clear();

        }
        else {

            location.href = base;

        }


        //  {

        //     valor = JSON.parse(localStorage.getItem("links"))

        //     arr.push(valor)

        //     localStorage.setItem('links', JSON.stringify(arr))

        // }

        
        
    
})










