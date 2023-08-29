const connectDb = async (url) => {
  mongoose.connect(url);
};

module.exports = connectDb;
