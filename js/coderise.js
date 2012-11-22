(function() {

  StackMob.init({
    appName: "coderise",
    clientSubdomain: "<YOUR EMAIL>",
    publicKey: "<YOUR PUBLIC KEY>",
    apiVersion: 0
  });

  $('#create-coderiser').click(function(e) {
    e.preventDefault();

    var Coderiser = StackMob.Model.extend({ schemaName: 'coderisers' });
    var entry = new Coderiser({ name: 'Coderiser :D', passions: [ 'code', 'fun', 'javascript', 'html', 'css' ] });
    entry.create();

    console.log("Created a coderiser in StackMob server");

  });


})();