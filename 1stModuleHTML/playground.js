console.log(('b' + 'a' + (+ 'a') + 'a').toLowerCase())
console.log(typeof(NaN))
console.log(typeof(('b' + 'a' + (+ 'a') + 'a').toLowerCase()))
/* O código da primeira linha imprime "banana". Os outros dois logs
são para exibir o tipo tanto de NaN quanto do primeiro código.
Achei divertido que o JS resolva converter NaN para uma string ao
fazer concatenação entre NaN e uma string. */