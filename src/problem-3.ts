//  Problem 3 :
//  Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.


    function countWordOccurrences(sentence: string, word: string): number {

        const simpleSentence = sentence.toLowerCase();
        const simpleWord = word.toLowerCase();
        const words = simpleSentence.split(' ');
        const countWord = words.filter(word => word === simpleWord).length;
        return countWord;

      };

    //   const getOutput = countWordOccurrences("I love typescript", "typescript");
    //   console.log(getOutput);
      