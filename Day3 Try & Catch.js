function reverseString(s) {
    
    try {
        
        var splitArray=s.split("");
        var reverseArray = splitArray.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    }
    catch(err) {
        console.log(err.message);
        console.log(s);
    }
    
}
