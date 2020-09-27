class Question {
    constructor(text,img,options,answer){
        this.text = text;
        this.img = img;
        this.options = options;
        this.answer = answer;
    }
}


const questions = [
    new Question("Koji je drugi najveci grad u Srbiji posle Beograda ?","nis",['Berlin','Beograd','Nis','Novi Sad'],'Novi Sad'),
    new Question("Izbaci uljeza","nis",['Kokoska','Pingvin','Noj','Orao'],'Orao'),
    new Question("Koliko hobotnica ima pipaka ?","nis",['8','4','6','3'],'8'),
    new Question("Najveca zivotinja na svetu je ?","nis",['Kit','Slon','Medved','Krokodil'],'Kit'),
    new Question("Kako se zvala plava riba iz crtanog Nemo","nis",['Klara','Dora','Mery','Sara'],'Dora'),
    new Question("Sofija ide kod ujaka, on je","nis",['Mamin brat','Tatin brat','Mamina sestra','Tatina sestra'],'Mamin brat'),
];
