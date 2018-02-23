const isPalindrome = (input) => {
      const fixFirst = input.replace(' ', '').toLowerCase().split('')
      const isReversed = fixFirst.reverse()
      
      console.log(fixFirst === isReversed)
}
isPalindrome('A man a plan a canal Panama')