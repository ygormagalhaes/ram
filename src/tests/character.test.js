const CharacterBusiness = require('../business/character.business');
let ApiService = require('../services/api.service');

it('não deve lançar nenhuma exceção', async done => {
    getLocations = jest.fn().mockReturnValue([]);
    getCharacters = jest.fn().mockReturnValue([]);
    await expect(() => {
        CharacterBusiness.getStructuredData();
    }).not.toThrow();
    done();
});

xit('deve retornar um array', async done => {
    ApiService.getLocations = jest.fn().mockResolvedValue([]);
    ApiService.getCharacters = jest.fn().mockResolvedValue([]);
    const result = await CharacterBusiness.getStructuredData();
    console.log(result);
    expect(Array.isArray(result)).toBe(true);
    done();
});