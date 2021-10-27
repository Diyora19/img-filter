function checked(event) {
    let img = document.querySelectorAll('img');
    let li = document.querySelectorAll('li')
    let i;
 
    for (i = 0; i < img.length; i++) {
        
        if (event == 'all') {
            img[i].style.display = 'block';
            

        } else {
            img[i].style.display = 'none';

            if (img[i].alt == event) {
                img[i].style.display = 'block';

            }

        }

    }

    for(let j=0; j<li.length;j++){
        if(li[j].id == event){
            li[j].classList.add('active')
        } else{
            li[j].classList.remove('active')
        }
    }

}

