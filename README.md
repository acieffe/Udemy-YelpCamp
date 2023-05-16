# YelpCamp
Final output website: [https://acieffe-yelp-camp.onrender.com/](https://acieffe-yelp-camp.onrender.com/)



# Overview

- **Home page**

  ![image-20210630162037696](README.assets/image-20210630162037696.png)

- **List of all campgrounds**

  ![image-20210630162247827](README.assets/image-20210630162247827.png)

- **Register** **/ Log In**

  To add new campground, edit the campground you created and write and edit your review.

  ![image-20210630162148254](README.assets/image-20210630162148254.png)

  - Log in as the reviewer's creater: you can delete your review.

  ![image-20210630162446591](README.assets/image-20210630162446591.png)

  - Log in as the campground's creater: you can edit and delete the campground, but cannot modify its review created by other people.

  ![image-20210630162612110](README.assets/image-20210630162612110.png)



# How to run it locally

1. after download, run `npm i` to install all node_modules needed.
2. open two terminals:
   - `cd` to this directory (YelpCamp), then `nodemon app.js` to connect to local MongoDB.
   - Run `mongo` in another terminal to see `yelp-camp` db.


# git push issue
Our own git repo will not update automatically after we push to Heroku side.
So, in order to keep our own git repo also up to date,
1. Push to Heroku: git push heroku main
2. Push to own git repo: git push
