if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    'sw.js',
    {
      scope: '/bulk/serviceworker/*'
    }
  )
  .then(
    function (sw) {
      console.log('sw registered.');
      console.log(sw);
      console.log(sw.scope);
      cosnole.log(sw.sourceURL);
      console.log(sw.state);
    },
    function (why) {
      console.log(why);
    }
  );
}
