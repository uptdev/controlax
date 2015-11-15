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
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    if (!isNaN(peso) && !isNaN(altura)){
        var imc = peso/(altura * altura);
        imc = imc.toFixed(1);
        document.getElementById("result").innerHTML = "O seu IMC é " + imc;
    }
    });

