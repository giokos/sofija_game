class Question {
    constructor(text,img,options,answer){
        this.text = text;
        this.img = img;
        this.options = options;
        this.answer = answer;
    }
}


const questions = [
    new Question("Pitanje 1","nis",['Sarajevo','Beograd','Nis','Novi Sad'],'Nis'),
    new Question("Pitanje 2","nis",['Sarajevo','Beograd','Nis','Novi Sad'],'Nis'),
    new Question("Pitanje 3","nis",['Sarajevo','Beograd','Nis','Novi Sad'],'Nis'),
    new Question("Pitanje 4","nis",['Sarajevo','Beograd','Nis','Novi Sad'],'Nis')
];
