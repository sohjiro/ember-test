test('hello world', function() {
  App.reset();
  visit("/");
  andThen(function() {
    equal(find(".welcome").length, 1, "Only have one welcome div");
  });
});
