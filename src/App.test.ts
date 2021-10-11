import '@testing-library/jest-dom'
import { App } from './App'


describe('App', () => {
    it('should be render', () => {
      expect(typeof App).toBe('function')
    })
})