/**
 * Problem: Anagram Finder
 * Context for Candidate: Given a list of words, return all groups of words that are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using
 * all the original letters exactly once.
 * */
public class AnagramFinder {

    /**
     * Expected output:
     * [listen, enlist, inlets, silent]
     * [apple]
     * */
    public static void main(String[] args) {
        findAnagrams(new String[]{"listen", "enlist", "inlets", "silent", "apple"}).forEach(System.out::println);
    }

    public static List<List<String>> findAnagrams(String[] words) {
        return null;
    }
 

}