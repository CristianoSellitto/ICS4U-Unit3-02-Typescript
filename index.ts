/*
* This program uses a method to calculate the factorial of a number.
*
* @author  Cristiano Sellitto
* @version 1.0
* @since   2024-04-19
*/

import { createPrompt } from 'bun-promptx'

/**
 * Finds the factorial of a number.
 *
 * @param integer the integer to use
 * @returns the factorial of the number
 */
function factorial(integer: number): number {
  if (integer < 0) {
    return -1
  } else if (integer <= 1) {
    return 1
  } else {
    return integer * factorial(integer - 1)
  }
}

const selectedNumber: number = createPrompt('Enter a number: ').value

if (isNaN(selectedNumber)) {
  console.log('This is not a number.')
} else {
  console.log(`The factorial of this number is ${factorial(selectedNumber)}`)
}

console.log('\nDone.')