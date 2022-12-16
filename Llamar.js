function Guardar(nombre,categoria) {
    let Nombre = nombre;
    let Categoria = categoria;
    //alert(categoria);
    localStorage.setItem("Nombre", Nombre);
    localStorage.setItem("Categoria", Categoria);
}