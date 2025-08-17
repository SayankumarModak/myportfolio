export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  // console.log(token)
  res.setHeader("Authorization", `Bearer ${token}`);
  res.status(statusCode).json({
    success: true,
    message,
    token: token,
    user
  })
  // res.status(statusCode).cookie("token", token, {
  //   expires: new Date(
  //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: true,
  //   samesite: "None",
  //   secure: true
  // }).json({
  //   success: true,
  //   message,
  //   user,
  //   token,
  // });
};

