var planeta = parseInt(prompt("cual planeta quieres? 1. marte 2. jupiter"));
        var usuario = prompt("cual es tu peso?");
        var gtierra = 9.8;
        var gmarte = 3.7;
        var gjupiter = 24.8;
        var peso = parseInt(usuario);
        var pesoFinal;
        if(planeta == 1)
        {
            pesoFinal = peso * gmarte / gtierra;
        }
        else if(planeta == 2)
        {
            pesoFinal = peso * gjupiter / gtierra
        }
        else 
        {
            pesoFinal = 1000000;
        }
        
        pesoFinal = parseInt(pesoFinal);
        document.write("tu peso en marte <strong>" + pesoFinal + " kilos</strong>");