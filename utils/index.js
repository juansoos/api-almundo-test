export const handleError = (error, res) => {
  res.status(500).jso({
    message: 'An error ocurred',
    error,
  });
};
