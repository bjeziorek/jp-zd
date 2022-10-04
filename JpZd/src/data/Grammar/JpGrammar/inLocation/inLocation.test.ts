import inLocation from "./inLocation" //npm test

describe('test1',()=>{
    test('Japanese sentence ends with dot "."',()=>{
       expect(inLocation('animals').romaji).toMatch(/.$/)
       })
    test('Polish sentence ends with dot "."',()=>{
        expect(inLocation('animals').meaning).toMatch(/.$/)
      })
     test('No calling in Polish sentence non string object (=== no [object Object] results',()=>{
        expect(inLocation('animals').romaji).not.toMatch(/\[object Object\]/)  
     })
     test('No calling in Japanese sentence non string object (=== no [object Object] results',()=>{
        expect(inLocation('animals').meaning).not.toMatch(/\[object Object\]/) 
     })
})