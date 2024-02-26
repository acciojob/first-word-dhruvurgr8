function firstWord(s) {
	s = s.trim();
    let str = "";
    if (s === "") {
        return s;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === " ") {
                return str;
            } else {
                str += s[i];
            }
        }
        return str;
    }
}  

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));  
