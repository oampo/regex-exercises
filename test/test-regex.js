var chai = require('chai');
var should = chai.should();
var br = require('../index');

describe('Regex banana functions', function() {
    describe('startsWithBanana', function() {
        it('Should accept strings which start with banana', function() {
            br.startsWithBanana('banana').should.be.true;
            br.startsWithBanana('bananas').should.be.true;
            br.startsWithBanana('bananarama').should.be.true;
            br.startsWithBanana('banana icecream').should.be.true;
        });

        it('Should reject strings which don\'t start with banana', function() {
            br.startsWithBanana('apple').should.be.false;
            br.startsWithBanana('abanana').should.be.false;
            br.startsWithBanana(' banana').should.be.false;
            br.startsWithBanana('\tbanana').should.be.false;
            br.startsWithBanana('lovely banana').should.be.false;
        });
    });

    describe('endsWithBanana', function() {
        it('Should accept strings which end with banana', function() {
            br.endsWithBanana('banana').should.be.true;
            br.endsWithBanana('abanana').should.be.true;
            br.endsWithBanana('lovely banana').should.be.true;
            br.endsWithBanana(' banana').should.be.true;
            br.endsWithBanana('\tbanana').should.be.true;
        });

        it('Should reject strings which don\'t end with banana', function() {
            br.endsWithBanana('apple').should.be.false;
            br.endsWithBanana('bananas').should.be.false;
            br.endsWithBanana('bananarama').should.be.false;
            br.endsWithBanana('lovely banana split').should.be.false;
        });
    });

    describe('isBananas', function() {
        it('Should accept strings which are either banana or bananas', function() {
            br.isBananas('banana').should.be.true;
            br.isBananas('bananas').should.be.true;
        });

        it('Should reject strings which aren\'t either banana or bananas', function() {
            br.isBananas('abanana').should.be.false;
            br.isBananas('bananan').should.be.false;
            br.isBananas('bananass').should.be.false;
            br.isBananas(' banana').should.be.false;
            br.isBananas('banana ').should.be.false;
            br.isBananas('bananas ').should.be.false;
            br.isBananas(' bananas').should.be.false;
        });
    });

    describe('isBananaaa', function() {
        it('Should accept strings which are banana with a lengthened final vowel sound', function() {
            br.isBananaaa('banana').should.be.true;
            br.isBananaaa('bananaaa').should.be.true;
            br.isBananaaa('bananaaaaaaaaaaaaaaaaa').should.be.true;
        });

        it('Should reject strings which aren\'t banana with a lengthened final vowel sound', function() {
            br.isBananaaa('abanana').should.be.false;
            br.isBananaaa('abananaaa').should.be.false;
            br.isBananaaa('bananas').should.be.false;
            br.isBananaaa(' banana').should.be.false;
            br.isBananaaa(' bananaaa').should.be.false;
            br.isBananaaa('banana ').should.be.false;
            br.isBananaaa('bananaaa ').should.be.false;
            br.isBananaaa('banan').should.be.false;
            br.isBananaaa('bananaaaaab').should.be.false;
        });
    });

    describe('isBananananana', function() {
        it('Should accept strings which are banana with any number of additional nas', function() {
            br.isBanananana('banana').should.be.true;
            br.isBanananana('banananana').should.be.true;
            br.isBanananana('banananananananananana').should.be.true;
        });

        it('Should reject strings which aren\'t banana with any number of additional nas', function() {
            br.isBanananana('').should.be.false;
            br.isBanananana('abanana').should.be.false;
            br.isBanananana('abanananana').should.be.false;
            br.isBanananana('bananas').should.be.false;
            br.isBanananana('bananan').should.be.false;
            br.isBanananana(' banana').should.be.false;
            br.isBanananana('bananab').should.be.false;
            br.isBanananana(' bananana').should.be.false;
            br.isBanananana('bananana ').should.be.false;
            br.isBanananana('bana').should.be.false;
            br.isBanananana('banan').should.be.false;
        });
    });

    describe('isAlphanana', function() {
        it('Should accept strings which are banana with a different letter at the start', function() {
            br.isAlphanana('banana').should.be.true;
            br.isAlphanana('aanana').should.be.true;
            br.isAlphanana('zanana').should.be.true;
            br.isAlphanana('fanana').should.be.true;
        });

        it('Should reject strings which aren\'t banana a different letter at the start', function() {
            br.isAlphanana(' zanana').should.be.false;
            br.isAlphanana('zanana ').should.be.false;
            br.isAlphanana('blanana').should.be.false;
            br.isAlphanana('zananab').should.be.false;
        });
    });

    describe('isBananaSplit', function() {
        it('Should accept strings which are banana split by whitespace', function() {
            br.isBananaSplit('banana').should.be.true;
            br.isBananaSplit('banana banana').should.be.true;
            br.isBananaSplit('banana   banana').should.be.true;
            br.isBananaSplit('banana \t banana').should.be.true;
            br.isBananaSplit('banana\tbanana\tbanana\tbanana').should.be.true;
        });

        it('Should reject strings which aren\'t banana split by whitespace', function() {
            br.isBananaSplit(' banana').should.be.false;
            br.isBananaSplit('banana ').should.be.false;
            br.isBananaSplit(' banana ').should.be.false;
            br.isBananaSplit('banana banana ').should.be.false;
            br.isBananaSplit(' banana banana').should.be.false;
            br.isBananaSplit('bananabanana').should.be.false;
            br.isBananaSplit('banana bananabanana').should.be.false;
        });
    });


});
