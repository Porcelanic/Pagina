import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "frontend/public/Estampados"); // Define the destination folder for uploads
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

export const saveImage = async  (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      // Handle multer errors, if any
      console.error(err);
      return res.status(400).send("File upload failed");
    }

    if (req.file) {
      const filePath = `Estampados/${req.file.filename}`;
      return res.status(200).json({ filePath }); // Sending the path as JSON response
    }

    return res.status(400).send("No file uploaded");
  });
};