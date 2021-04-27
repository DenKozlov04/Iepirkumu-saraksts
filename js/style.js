let produkti = [];

window.addEventListener('load', () => {
    produkti = JSON.parse(localStorage.getItem("produkti") || "[]");
    console.log(produkti)

    render();
});

function render() {
    let library = document.getElementById('library');
    library.innerHTML = "";

    for(let i = 0; i < produkti.length; i++) {
        let produkti_2 = `
        <div class="produkti">
            <h3>placeholder: ${produkti[i].placeholder}</h3>
            <h4>placeholder_1: ${produkti[i].laceholder_}</h4>
        </div>`;

        library.innerHTML += produkti;
    }

    localStorage.setItem("produkti", JSON.stringify(produkti))
}


window.onload = function(){
 

document.getElementById('button').addEventListener('click', () => {
    console.log("kaut ko izvada");

    let produkti_2 = {placeholder: placeholder.value, placeholder_1: placeholder_1.value};

    placeholder = "";
    placeholder_1 = "";

    produkti.push(produkti_2);

    render();

})

}
