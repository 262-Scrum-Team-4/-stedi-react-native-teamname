import sayHello from '../utils/hello.alex.mjs';
import assert from 'assert';

it("Tests Hello World", ()=>{

    const hello = sayHello();

    assert.equal(hello,"hello");

    console.log(sayHello());

    expect(sayHello()).toBe("hello");

});
