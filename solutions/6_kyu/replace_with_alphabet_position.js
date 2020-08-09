function alphabetPosition(text) {
  let result = "";
  
  text = text.toLowerCase();
  
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    
    if (charCode >= 97 && charCode <= 122) result += " " + (charCode - 96);
   };
  
  return result.slice(1);
}