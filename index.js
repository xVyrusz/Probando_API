const boton = document.getElementById("boton");
const contenedor = document.getElementById("lista");


const Buscar = () => {
    const movie = document.getElementById("buscar").value;
    contenedor.innerHTML = `<tr></tr>`
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=737d11e7`)
        .then(data => { return data.json() })
        .then(peli => {
            for (let i = 0; i < peli.Search.length; i++) {
                contenedor.innerHTML += `
                <tr>
                    <th scope="row">${i+1}</th>
                    <td><img src="${peli.Search[i].Poster}"></br></td>
                    <td>${peli.Search[i].Title}</td>
                </tr>`
            }
        })
}

boton.addEventListener("click", Buscar);