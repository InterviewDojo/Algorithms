import { isPermutePalindrome } from "../palindromePremutation";

test("should return false for 'code' as it is not PalindromePremutation", () => {
  expect(isPermutePalindrome("code")).toBe(false);
});

test("should return true for 'aab' as it is PalindromePremutation", () => {
  expect(isPermutePalindrome("aab")).toBe(true);
});
