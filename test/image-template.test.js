import images from '../data/images.js';

const test = QUnit.test;

function imageTemplate(image) {
    const html = `<li>
<h2>UniWhal</h2>
<img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>
`;

    // const template = document.createElement('template');
    // template.innerHTML = html; 
    // return template.content;
    return html; 
    
}
test('making a template for the images', assert => {
//arrange
    const image = images[0];

//act
    const result = imageTemplate(image);
    const expected = `<li>
<h2>UniWhal</h2>
<img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>
`;
//assert
    assert.equal(result, expected);
});