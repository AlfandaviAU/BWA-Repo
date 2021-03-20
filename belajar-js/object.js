const Person = {
    firstName: "Kimi",
    lastName: "Hime",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 65,
    height: 172,
    ideal : function(){
        return (this.height-100)*0.9;
    },
    goodEnough: function(){
        if(this.ideal()){
            return "you are in a good shape"
        } else{
            return "bois";
        }
    }
};

console.log(Person.fullName());
console.log(Person.ideal());/* 
console.log(Person.weight > Person.ideal()); */
console.log(Person.goodEnough());

/* const countries = {
    ID: {
        province: ["bali","jawa timur","jawa tengah"],
        city: ["singaraja","gianyar","negare","badung"]
    },
    MY: {
        
    },
};
console.log(countries.ID.city.indexOf("badung"));
console.log(countries.TH?.province ?? "not found"); */