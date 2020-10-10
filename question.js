class Question {
    constructor(text,img,options,answer){
        this.text = text;
        this.img = img;
        this.options = options;
        this.answer = answer;
    }
}


const questions = [
    new Question("Koliko je tata visok ?","nis",['174cm','180cm','184cm','192cm'],'184cm'),
    new Question("Tata zivi u ?","nis",['Sarajevu','Mostaru','Podgorici','Beogradu'],'Sarajevu'),
    new Question("Boja tatinog auta je ? ","nis",['Crvena','Crna','Plava','Bela'],'Crna'),
    new Question("Od zivotinja tata najvise voli ?","nis",['Macke','Pse','Delfine','Krokodile'],'Macke'),
    new Question("Koji instrument svira tata ?","nis",['Elektricnu gitaru','Akusticnu gitaru','Klavir','Saksofon'],'Elektricnu gitaru'),
    new Question("Kako se zove Sofijina najmladja sestra ?","nis",['Lana','Maja','Lara','Lena'],'Lana'),
    new Question("Tata predaje ?","nis",['Programiranje','Matematiku','Srpski','Fizicko'],'Programiranje'),
    new Question("Tata je tezak ?","nis",['83kg','89kg','94kg','99kg'],'94kg'),
    new Question("Tata pije ?","nis",['Koka-kolu','Pivo','Rakiju','Mleko'],'Koka-kolu'),
    new Question("Koju nogu je tata slomio ?","nis",['Levu','Desnu','Obe','Nijednu'],'Levu'),
    new Question("Tata najvise voli","nis",['Zimu','Jesen','Prolece','Leto'],'Zimu'),
    new Question("Kako se zvala macka u tatinom stanu","nis",['Marla','Maka','Mirla','Murla'],'Marla'),
    new Question("Tata se rodio u kom gradu ?","nis",['Majdanpeku','Beogradu','Baru','Berane'],'Majdanpeku'),
    new Question("Tata voli Sofiju ?","nis",['Malo','Puno','Do sunca','Beskonacno'],'Beskonacno'),
];
