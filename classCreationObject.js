// Create an instance of an object and retrieve the data stored in a particular line

class anyBook {

    constructor (name, author, date) {

        this.name = name;
        this.author = author;
        this.date = date;
    };

    propertyNo (num) {

        let keysArr = Object.keys(this);

        let key = keysArr[num-1];
        let value = this[key];
        process.stdout.write("The selected property No."+ num +", which is a/an "+ key.toUpperCase()+", has the value: "+  value.toUpperCase()+".\n");
    };

};

const Book1 = new anyBook ("Sunrise", "Jack Willson", "2005");

Book1.propertyNo(3); // Output: The selected property No.3, which is a/an DATE, has the value: 2005.
