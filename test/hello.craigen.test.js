import sayHello from '../utils/hello.craigen.mjs';
import assert from 'assert';

it ("Tests Hello World", ()=>{
   const hello = sayHello();
   console.log(hello);
   assert.equal(hello, "hello");
});