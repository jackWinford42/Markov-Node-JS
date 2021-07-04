const MarkovMachine = require("./markov.js");

test('makeChains should make a correct chain', function() {
    let firstMarkov = new MarkovMachine("the cat in the hat");
    expect(firstMarkov.chains).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]})

    let secondMarkov = new MarkovMachine("look if you had one shot or one opportunity to seize everything you ever wanted in one moment would you capture it or just let it slip yo his palms are sweaty knees weak arms are heavy there's vomit on his sweater already mom's spaghetti");
    expect(secondMarkov.chains).toEqual({ look: [ 'if' ],
    if: [ 'you' ],
    you: [ 'had', 'ever', 'capture' ],
    had: [ 'one' ],
    one: [ 'shot', 'opportunity', 'moment' ],
    shot: [ 'or' ],
    or: [ 'one', 'just' ],
    opportunity: [ 'to' ],
    to: [ 'seize' ],
    seize: [ 'everything' ],
    everything: [ 'you' ],
    ever: [ 'wanted' ],
    wanted: [ 'in' ],
    in: [ 'one' ],
    moment: [ 'would' ],
    would: [ 'you' ],
    capture: [ 'it' ],
    it: [ 'or', 'slip' ],
    just: [ 'let' ],
    let: [ 'it' ],
    slip: [ 'yo' ],
    yo: [ 'his' ],
    his: [ 'palms', 'sweater' ],
    palms: [ 'are' ],
    are: [ 'sweaty', 'heavy' ],
    sweaty: [ 'knees' ],
    knees: [ 'weak' ],
    weak: [ 'arms' ],
    arms: [ 'are' ],
    heavy: [ 'there\'s' ],
    'there\'s': [ 'vomit' ],
    vomit: [ 'on' ],
    on: [ 'his' ],
    sweater: [ 'already' ],
    already: [ 'mom\'s' ],
    'mom\'s': [ 'spaghetti' ],
    spaghetti: [ null ] })
});

test('test if makeText makes text of the correct word length', function() {
    let firstMarkov = new MarkovMachine("the cat in the hat");
    const text = firstMarkov.makeText(15);
    const textArr = text.split(' ');
    expect(textArr.length).toEqual(15);

    let secondMarkov = new MarkovMachine("look if you had one shot or one opportunity to seize everything you ever wanted in one moment would you capture it or just let it slip yo his palms are sweaty knees weak arms are heavy there's vomit on his sweater already mom's spaghetti");
    const spaghettiText = secondMarkov.makeText(50)
    const spagTextArr = spaghettiText.split(' ');
    expect(spagTextArr.length).toEqual(50)
})