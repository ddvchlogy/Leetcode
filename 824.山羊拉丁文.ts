/*
 * @lc app=leetcode.cn id=824 lang=typescript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
function toGoatLatin(sentence: string): string {
  let words = sentence.split(' ')
  let num = 0
  const regex = /^[AEIOUaeoiu]/g
  words = words.map(word => {
    let newWord = word
    if (!newWord[0].match(regex))
      newWord = newWord.substring(1) + newWord[0]
    newWord = newWord + "ma"
    num += 1
    return `${newWord}${'a'.repeat(num)}`
  })
  return words.join(' ')
};
// @lc code=end

