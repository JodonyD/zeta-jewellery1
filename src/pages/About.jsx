import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">About Zeta Jewellery</h2>
      <p className="lead text-center">
        Zeta Jewellery is dedicated to creating handmade, meaningful jewellery that celebrates elegance, uniqueness, and craft.
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p className=" text-center">
            Founded in <i>2019</i>, Zeta Jewellery began with a passion for crafting unique pieces that tell a story. Every item you find here is meticulously <i>handmade</i>, ensuring exceptional quality and a personal touch that mass-produced jewellery simply can't offer.
          </p>
          <p className=" text-center">
            From delicate necklaces to statement earrings, each creation in our collection is a testament to our commitment to artistry and craftsmanship. Thank you for supporting our small business and choosing handmade beauty!
          </p>
        </div>
      </div>
        <h2 className="text-center my-5">Our Instagram Feed</h2>
        <iframe src="https://snapwidget.com/embed/1104654" class="snapwidget-widget"
         allowtransparency="true" frameborder="0" scrolling="no" 
         style={{ width: '100%', height: '800px', overflow: 'hidden' }} 
         title="Posts from Instagram"></iframe>
         
    </div>
  );
}

export default About;