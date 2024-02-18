import sayHello from '../utils/hellokaren.mjs';
import assert from 'assert';

it("Tests Hello World", ()=>{

    const hello = sayHello();

    assert.equal(hello,"Hello");

    console.log(sayHello());
});
