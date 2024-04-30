export const setUser = async (req, res, next) => {
  req.role = "user";
  next();
};

export const setAdmin = async (req, res, next) => {
  req.role = "admin";
  next();
};

export const setLibrary = async (req, res, next) => {
  req.role = "library";
  next();
};
