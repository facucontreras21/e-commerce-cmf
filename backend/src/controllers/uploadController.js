import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads");
  },
  filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "path.extname");
  },
});
const checkFileType = (file, cb) => {
  const filetypes = /jpg | jpeg| png/;
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
    //Retornar el cb sin errores y con true
  } else {
    cb("Images only!");
  }
};
export const uploadConfig = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
/*
 * @desc upload a image
 * @route Post / api/upload
 * @access Private/Admin
 */
export const upload = (req, res) => {
  res.send(`/${req.file.path.replace(/\\/g, "/")}`);
};
