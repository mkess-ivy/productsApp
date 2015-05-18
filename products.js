if (Meteor.isClient) {
  // counter starts at 0
  var Products = new Array(
        { Name    :  "Screw Driver",
          Price   :  "1.50",
          InStock :  true },

        { Name    :  "Hammer",
          Price   :  "3.00",
          InStock :  false }
);

Template.Products.ProductArr = function(){
    return Products;
};
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
