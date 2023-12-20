/**
 * Debounce function that takes a function and a delay.
 * @param {Function} fn - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} - The debounced function.
 */
// retorna una funcion que al ser llamada tien un delay, solo cumple con el delay la ultima ves que se la llamó
export function fnDebounce (fn, delay) { 
  let timeout               // solo se crea al momento de usar el fnDebounce, 
  return function () {      // el uso de esta funcion solo cambia el valor dle timeout,
    const self = this
    const arg = arguments
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(self, arg)
    }, delay)
  }
}

