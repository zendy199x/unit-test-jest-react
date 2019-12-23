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

    it.only(`should display a list of items`, () => {
        expect(1 + 1).toEqual(2);
    })

    it.skip(`should be the meaning of life`, () => {
        expect(1 + 1).toEqual(3);
    })
})