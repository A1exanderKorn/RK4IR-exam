function change_menu(){
    let menu = document.getElementById("menu");
    if(menu.classList.contains("not_visible")){
        menu.classList.remove("not_visible");
        menu.classList.add("visible");
        //  всё, что ниже, наверное, необязательно
        let img = document.getElementById("btn");
       
        img.querySelectorAll('div')[0].setAttribute(
            'style',
            'position: absolte; height: 6px; border-radius: 1px; transform: rotate(45deg)'
        )
        img.querySelectorAll('div')[1].setAttribute(
            'style',
            'display: none'
        )
        img.querySelectorAll('div')[2].setAttribute(
            'style',
            'position: absolute; height: 6px; border-radius: 1px; transform: rotate(-45deg)'
        )
        document.getElementById("btn").setAttribute('style', "height: 6px;")
    } else{
        menu.classList.remove("visible");
        menu.classList.add("not_visible");
        //  всё, что ниже, наверное, необязательно
        let img = document.getElementById("btn");
        img.querySelectorAll('div')[0].setAttribute(
            'style',
            ''
        )
        img.querySelectorAll('div')[1].setAttribute(
            'style',
            ''
        )
        img.querySelectorAll('div')[2].setAttribute(
            'style',
            ''
        )
        document.getElementById("btn").setAttribute('style', "height: 31px;")
    }
}
