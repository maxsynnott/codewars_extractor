String.prototype.toJadenCase = function () {
  const words = this.split(' ').map(word => word[0].toUpperCase() + word.slice(1));
  
  return words.join(' ');
};