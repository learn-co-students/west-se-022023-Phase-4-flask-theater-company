import { atom, selector } from 'recoil'

export const allProductions = atom({
    key: 'allProductions', 
    default: selector({
        key: 'allProductionsLoader',
        get: async () => {
            const response = await fetch('/productions')
            const result = await response.json()
            return result
        }
    })
})