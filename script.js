function media() {
    var nota1 = window.document.getElementById("nota1")
    var nota2 = window.document.getElementById("nota2")
    var nota3 = window.document.getElementById("nota3")
    var nota4 = window.document.getElementById("nota4")
    var resultado = window.document.getElementById("res")

    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var n3 = Number(nota3.value)
    var n4 = Number(nota4.value)

    var s = (n1 + n2 + n3 + n4) / 4;
    resultado.innerHTML = "Sua Média é: " + s
    console.log(n1, n2, n3, n4)
}