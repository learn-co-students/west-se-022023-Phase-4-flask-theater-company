import { atom, selector } from 'recoil'

export const currentUser = atom({
    key: 'currentUser', 
    default: selector({
        key: 'currentUserLoader',
        get: async () => {
            const response = await fetch('/authorized')
            if (response.ok) {
                const result = await response.json()
                return result
            } else {
                return null
            }
        }
    })
})