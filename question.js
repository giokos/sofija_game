class Question {
    constructor(text,img,options,answer){
        this.text = text;
        this.img = img;
        this.options = options;
        this.answer = answer;
    }
}


const questions = [
    new Question("Kako se zove sila koja privlaci predmete na Zemlju ?","nis",['Magnet','Gravitacija','Atomska sila','Plima'],'Gravitacija'),
    new Question("Kako se zove nasa galaksija ?","nis",['Mlecni put','Andromeda','Europa','Suncalis'],'Mlecni put'),
    new Question("Na jednoj ruci ima 5 prstiju, a na dve ruke 10 prstiju. Koliko prstiju ima na deset ruku?","nis",['25','50','100','200'],'50'),
    new Question("Anina mama ima tri ćerke. Jedna se zove Mira, a druga Jelena. Kako se zove treća ćerka.","nis",['Marija','Ana','Sofija','Tanja'],'Ana'),
    new Question("Dva konja upregnuta u kociju prešla su 20 kilometara. Koliko je prešao svaki konj?","nis",['20','10','5','25'],'20')

];
