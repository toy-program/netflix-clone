exports.myListController = (req, res, next) => {
  res.status(200).json("My List");
};

exports.mainController = (req, res, next) => {
  res.status(200).json("Main Controller");
};

exports.genreController = (req, res, next) => {
  res.status(200).json("Genre");
};
