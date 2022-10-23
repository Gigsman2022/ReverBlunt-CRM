module.exports = {
  BASE_URL:
    process.env.NODE_ENV == "development"
      ? "http://localhost:5001"
      : "https://gigzman-backend.herokuapp.com",
};
