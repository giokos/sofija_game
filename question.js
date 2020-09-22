class Question {
    constructor(text,img,options,answer){
        this.text = text;
        this.img = img;
        this.options = options;
        this.answer = answer;
    }
}


const questions = [
    new Question("Koji je drugi najveci grad u Srbiji posle Beograda","nis",['Berlin','Beograd','Nis','Novi Sad'],'Novi Sad'),
    new Question("Pitanje 2","nis",['Sarajevo','Beograd','Nis','Novi Sad'],'Nis'),
    new Question("Pitanje 3","nis",['Sarajevo','Beograd','Nis','Novi Sad'],'Nis'),
    new Question("Pitanje 4","nis",['Sarajevo','Beograd','Nis','Novi Sad'],'Nis')
];
