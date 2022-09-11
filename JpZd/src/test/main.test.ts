import {testowa} from "../data/dictionary"

describe('test1',()=>{
    test('test1-1',()=>{
       expect(testowa(2,4)).toBe(6)
    })
})