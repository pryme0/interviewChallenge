const data = require("../data/data.json");
const {pipe, skip, page} = require('iter-ops');


const getVideo = (pageIndex) => {
  try{
    let skipValue = pageIndex === 1?(0):(5 *pageIndex-5)
    const result = pipe(
        data.videos,
        skip(skipValue), // skip pages we don't want
        page(5) // create the next page
  ).first;

  console.log(result)
  return {result,totalCount:data.videos.length};
  }
  catch(error){
    throw error
  }
  };

  module.exports = getVideo
