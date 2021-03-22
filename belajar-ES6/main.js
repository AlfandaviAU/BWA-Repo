/* const user_place = document.getElementById('user'); */


// ES5
/* const user_logged = "Tony";
user_place.innerHTML = "Hi, " + user_logged + " Apa kabar?";
console.log(user_logged); */

// ES6
/* const user_logged = "Tony";
user_place.innerHTML = `Hi ${user_logged}, Apa kabar?`; */



/* const cart_items = document.getElementById('cart'); */

// ES5
/* function addProduct(name, category) {
    return {
        name: name,
        category: category
    }
} */

// ES6
/* 
function addProduct(name, category) {
    return { name, category }
}
var getProduct = addProduct("iPhone 11", "Gadget");
cart_items.innerHTML = `Product No.1 : ${getProduct.name} <br> Category : ${getProduct.category}`;
console.log(getProduct); */

/* 
const skill_holder = document.getElementById('skills');


// ES5

// ES6
const yourSkills = ['UX Design', 'WebDev', 'Video Editor']; */

/* yourSkills.push('DevOps');

let parent = '<ul>';

yourSkills.forEach(element => {
    parent += '<li>' + element + '</li>';
    console.log(element);
}); */
/* 
parent += '</ul>'; */

/* const printSkills = yourSkills.map(skill => {
    return skill;
})

// Filter Data
const primarySkills = yourSkills.filter(skill => {
    return skill === "UX Design";
})

const noUX = yourSkills.filter(skill => {
    return skill !== "UX Design";
})

skill_holder.innerHTML = primarySkills;
skill_holder.innerHTML = noUX; */


const data = document.getElementById("data");

// Modul untuk member kelas

class Siswa {
    constructor(username, password, id_kelas) {
        this.username = username;
        this.password = password;
        this.id_kelas = id_kelas;
    }

    gabung() {
        console.log(this.username + " telah bergabung pada kelas " + this.id_kelas);
    }
}


/* let tambahSiswa = new Siswa("AlfandaviAU", "123456", 12);
tambahSiswa.gabung(); */


// Inheritance

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }
    berlangganan() {
        console.log(this.username + " telah berlangganan dengan paket " + this.paket);
    }
}

let asu = new Langganan("AlfandaviAU", "Deep Ocean");
asu.berlangganan();
asu.gabung();