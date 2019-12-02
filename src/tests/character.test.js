const CharacterBusiness = require('../business/character.business');
let ApiService = require('../services/api.service');

describe('CharacterBusiness', () => {
    beforeEach(() => {
        CharacterBusiness.getLocations = jest.fn().mockResolvedValue([]);
        CharacterBusiness.getCharacters = jest.fn().mockResolvedValue([]);
    });
    
    it('não deve lançar nenhuma exceção', async done => {
        await expect(() => {
            CharacterBusiness.getStructuredData();
        }).not.toThrow();
        done();
    });
    
    xit('deve retornar um array', async done => {
        expect(Array.isArray(result)).toBe(true);
        done();
    });
})
