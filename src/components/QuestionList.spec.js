describe (`The question list`, () => {
    beforeEach(() => {
        console.log('Before each !')
    })

    beforeAll(() => {
        console.log('Before all !')
    })

    afterEach(() => {
        console.log('After each !')
    })

    afterAll(() => {
        console.log('After all !')
    })

    it (`should display a list of items`, () => {
        expect(1 + 1).toEqual(2);
    })

    it (`should be the meaning of life`, () => {
        expect(1 + 1).toEqual(2);
    })
})