function Application(UIContext) {
    this._uiContextClass = UIContext;
    this._initialized = false;
};
Application.prototype.init = function() {
    if (this._uiContextClass && !this._initialized) {
        this._initialized = true;
        var UI = new this._uiContextClass();
        UI.init();
    }
};
Application.prototype.initialized = function() {
    return this._initialized;
};

document.getElementById("calcular").addEventListener('click', function(){

    // vai buscar os valores do peso e da altura aos textfields através do Id
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    // converte o peso e a altura em numeros
    peso = Number(peso);
    altura = Number(altura);

    if (!isNaN(peso) && !isNaN(altura) && (peso != 0 && altura != 0)) {

        // calcula imc
        var imc = peso/(altura * altura);

        // mostra apenas 1 casa decimal
        imc = imc.toFixed(1);

        // escreve no documento
        write = document.getElementById("result")
        write.innerHTML = "O seu IMC é " + imc + "<p></p>";

    }
    else {
        document.getElementById("result").innerHTML = "Tem de introduzir o peso e a altura."
    }
    });

