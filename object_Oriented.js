let post = {
    name: "Kaleb Burd",
    message: "@coderhino why is your code hot garbage?",
    comments: "Code Differently is awesome",
    likes: 7,
    location: "Wilmington,De",
    tag: function() {
        console.log('this is the tag function');
    },
    share: function() {
        console.log('this is the share function');
    }



}
// bracket notation
// objectName ['proerty'] = newPropertyValue;

post['name'] = "Jon Smith";
post['likes'] = 10;
console.log(post);
post['tag']();
post.tag();






// dot notation
post.message = "Our hard work in coding has paid off"
post.likes = 25
post.location = "Los Angles"
post.name = "Mike Jordan"
post.shares = 10

console.log(post);