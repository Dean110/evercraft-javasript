import{Character} from "../src/Character.js";

describe('Iteration 1 - Core - This iteration covers core functionality for leveling, combat, and character attributes.', () => {
    let underTest;

    describe('Feature: Create a Character', () => {
        it('Can get and set a name', () => {
            underTest = new Character('Testy')
        });
    });
});