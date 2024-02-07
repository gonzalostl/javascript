let men1 = "elige si quieres convertir a farenhig(f) o a celsuis(c)";
let num1 = prompt(men1);

if(num1 == "f"){
    let menf = "inserte los grados farenhih";
    let numf = prompt(menf);
    
    numc= (Number(numf)-32)*5/9;

    document.write(numf+" Fº son "+numc+" Cº");

}
if(num1 == "c"){
    let menc = "inserte los grados celsius";
    let numc = prompt(menc);
    
    numf= (Number(numc)/5*9)+32;

    document.write(numc+" Cº son "+numf+" Fº");

}