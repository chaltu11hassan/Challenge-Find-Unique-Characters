// Chaltu Hassan

// Given a word, return true if that word contains only unique characters. Return false otherwise.

//EXAMPLES

    //hasUniqueChars("Monday")
    // returns true

    //hasUniqueChars("Moonday")
    // returns false

    //Uppercase and lowercase letters should be considered separately:

   //hasUniqueChars("Bob")
    // returns true

// Write your code below


//WHAT WE WENT OVER TOGETHER IN CLASS

// Build a function that takes one argument as string.
    // function hasUniqueChars(str){

    //create some data structure to store unique characters.
        //let uniqueChars = new Set([]);

    // Loop through string and add all character to set
    //   for(let i=0; i<str.length; i++){
    //     uniqueChars.add(str[i])
    //   }
    //   return str.length === uniqueChars.size;
    // }

    // console.log(hasUniqueChars("Monday"))
    // console.log(hasUniqueChars("Moooooooooonday"))


    function hasUniqueChars(str){
        let uniqueChars = new Set([]);
        for (let i =0; i < str.length; i++){
            uniqueChars.add(str[i]);
        }
        return uniqueChars.size === str.length;
    }

    console.log(hasUniqueChars('Monday')); //true
    console.log(hasUniqueChars("Moonday")); //false
    console.log(hasUniqueChars('Chal22')); //false
    console.log(hasUniqueChars("Chaltu2")); //true