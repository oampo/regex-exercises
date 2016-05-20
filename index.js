/**
 * Check whether a string starts with banana
 */
exports.startsWithBanana = function(str) {
    return /^banana/.test(str);
};

/**
 * Check whether a string ends with banana
 */
exports.endsWithBanana = function(str) {
    return /banana$/.test(str);
};

/**
 * Check whether a string is either banana, or bananas
 */
exports.isBananas = function(str) {
    return /^bananas?$/.test(str);
};

/**
 * Check whether a string is banana with an optionally lengthened final
 * vowel sound (bananaaaaaaaaaaaaaaa)
 */
exports.isBananaaa = function(str) {
    return /^banana+$/.test(str);
};

/**
 * Check whether a string is banana with optional additional nas (banananana)
 */
exports.isBanananana = function(str) {
    return /^b(an){2,}a$/.test(str);
};

/**
 * Check whether a string is banana, but allow other alphabetical starting
 * characters (zanana, lanana, etc).
 */
exports.isAlphanana = function(str) {
    return /^[a-z]anana$/.test(str);
};

/**
 * Check whether a string is a sequence of the word banana, separated by
 * whitespace.  No starting or trailing whitespace is allowed.
 */
exports.isBananaSplit = function(str) {
    return /^(banana((\s+(?=banana))|$))+$/.test(str);
};


