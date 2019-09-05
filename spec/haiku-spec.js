import { getSyllables } from './../src/syllables.js';

describe("getSyllables", function() {
  it("will ignore non-alphabetical characters", function() {
    expect(getSyllables("$4*+")).toEqual(0);
  });
  it("will remove non-alphabetical characters from words", function() {
    expect(getSyllables("3L337")).toEqual(1);
  });
  it("will output 1 if the word length is 1", function() {
    expect(getSyllables("I")).toEqual(1);
  });
  it("will correctly identify single syllable words", function() {
    expect(getSyllables("book")).toEqual(1);
  });
  it("will correctly identify multiple syllable words", function() {
    expect(getSyllables("javascript")).toEqual(3);
  });
  it("will recognize words like 'chopped' and 'dropped' are single syllable", function() {
    expect(getSyllables("chopped")).toEqual(1);
  });
  it("will correctly words with no vowels except y", function() {
    expect(getSyllables("rhythym")).toEqual(2);
  });
  it("will correctly identify words with multiple leading vowels", function() {
    expect(getSyllables("aioli")).toEqual(3);
  });
  it("will correctly identify words with lots of syllables", function() {
    expect(getSyllables("pseudopseudohypoparathyroidism")).toEqual(11);
  });
});
