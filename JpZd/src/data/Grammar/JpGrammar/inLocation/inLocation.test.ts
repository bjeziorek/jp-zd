import { Theme } from './../../../../types/Theme.model';
import inLocation from "./inLocation" //npm test

describe('test1',()=>{
    test('Japanese sentence ends with dot "."',()=>{
       expect(inLocation('animals' as Theme).romaji).toMatch(/.$/)
       })
    test('Polish sentence ends with dot "."',()=>{
        expect(inLocation('animals' as Theme).meaning).toMatch(/.$/)
      })
     test('No calling in Polish sentence non string object (=== no [object Object] results',()=>{
        expect(inLocation('animals' as Theme).romaji).not.toMatch(/\[object Object\]/)  
     })
     test('No calling in Japanese sentence non string object (=== no [object Object] results',()=>{
        expect(inLocation('animals' as Theme).meaning).not.toMatch(/\[object Object\]/) 
     })
     test('No undefined in Polish',()=>{
      expect(inLocation('animals' as Theme).romaji).not.toMatch(/undefined/)  
   })
   test('No undefined in Japanese',()=>{
      expect(inLocation('animals' as Theme).meaning).not.toMatch(/undefined/) 
   })
})