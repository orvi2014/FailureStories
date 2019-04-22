const mongoose = require('mongoose');

let FailureStory = new mongoose.Schema({
  storyteller_name: {
    type: String,
  },
  storyteller_designation: {
    type: String,
  },
  storyteller_company: {
    type: String,
  },
  storyteller_image: {
    data: Buffer,
    contentType: String
  },
  storyteller_company_joining_date: {
    type: Date
  },
  storyteller_company_ending_date: {
    type: Date
  },
  story_title: {
    title: String
  },
  story: {
    title: String
  }
});

module.exports = mongoose.model('FaliureStory', FailureStory);