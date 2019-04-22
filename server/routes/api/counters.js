const Story = require('../../models/FailureStoryData');

module.exports = (app) => {
  app.get('/api/counters', (req, res, next) => {
    Story.find()
      .exec()
      .then((story) => res.json(story))
      .catch((err) => next(err));
  });
// create a new rejected story
  app.post('/api/v1/story', function (req, res, next) {
    const story = new Story(req.body);

    story.save()
      .then((story) => res.json({'Sucess': 'Your Story is created'}))
      .catch((err) => next(err));
  });
// delete your story
  app.delete('/api/v1/story/:id', function (req, res, next) {
    Story.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((counter) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/increment', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((story) => {
        counter.count++;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};
