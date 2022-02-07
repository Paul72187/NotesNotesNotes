class Library {
    constructor() {
        this.storageArr = [];
    }

    add(title, content) {
        this.storageArr = JSON.parse(localStorage.getItem("My_Notes"));
        if (this.storageArr == null) {
            this.storageArr = [];
        }
        this.storageArr.push({ title: title, content: content });
        let storageJson = JSON.stringify(this.storageArr);
        localStorage.setItem("My_Notes", storageJson);
    }

    view() {
        this.storageArr = JSON.parse(localStorage.getItem("My_Notes"));
        return this.storageArr;
    }
}

class Notes {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}