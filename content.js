const div = document.createElement('div')
const styled = document.createElement('style')
const popup = document.createElement('div')
const btnlimpar = document.createElement('button')
const input = document.createElement('input')


document.body.append(div)
document.body.append(popup)
document.body.append(styled)
document.body.append(input)
document.body.append(btnlimpar)


const divConfigs = { 

    title: 'Scrapping Urls', 
    class : 'getid', 
    style :  ` 
        .input_dom_popup { 
            z-index: 5;
            position: fixed;
            bottom: 100px;
            background: #fff;
            left: 25px;
            font-size: 15px;
            color: #000;
            border-radius: 5px;
            padding: 16px 4px;
        }
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
            z-index: 5;
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
            .btn-limpar {
                left: 210px;
                border: none;
            }
            ` ,

}


div.innerHTML = divConfigs.title

btnlimpar.innerHTML = 'Reset'

div.classList = divConfigs.class

input.classList = 'input_dom_popup'

btnlimpar.classList = 'getid btn-limpar'

popup.classList = 'popupDiv activePopup'

styled.innerHTML = divConfigs.style

novo = new Array();

btnlimpar.addEventListener('click', ()=> {
    localStorage.clear();
    location.href = 'https://google.com/'
}) 

input.setAttribute('placeholder', 'URL completa')
input.setAttribute('title', 'Preencha este campo, se você for pesquisar por uma palavra especifica')


div.addEventListener('click', ()=> {

        popup.classList.remove('activePopup')

        div.innerHTML = 'Scrapping'

        t = document.querySelector("#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input").value
        query = t.replaceAll(' ', '+')

        if(input.value != ''){

            localStorage.setItem('base', input.value)

        }

        if(localStorage.getItem('base')){

            search = localStorage.getItem('base')
            
        }
        else { 

            search = 'https://' + t.substr(5);

        }

        
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

        if(localStorage.getItem('links')){

            valores = localStorage.getItem('links');

            vals = valores.replaceAll(/[\\"]/g, '');

            auxmax = vals.split(',');

            novo = auxmax.filter((found, indice) => {
                return auxmax.indexOf(found) === indice
            })

            arr.push(JSON.stringify(novo))

        }
        else {

            arr.push(JSON.stringify(arr))

        }
       

        localStorage.setItem('links', JSON.stringify(arr))

        aux = parseInt(localStorage.getItem('index')) + 10

        localStorage.setItem('index', aux.toString());


        base = `https://www.google.com/search?q=${query}&rlz=1C1GCEU_pt-BRBR965BR965&ei=WkRsYtejEsOV0AaroaqoCw&start=${aux}&sa=N&ved=2ahUKEwjXuOuviLr3AhXDCtQKHauQCrUQ8tMDegQIARA_&biw=1366&bih=625&dpr=1`
        


        if(document.body.innerText.includes('não encontrou nenhum documento correspondente')){

            novo.forEach((n, i) => {
                
                t = n.replaceAll('[', '')
                x = t.replaceAll('null', '')
                j = x.replaceAll(']', '')
                

                popup.innerHTML += j + '<br>'

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










