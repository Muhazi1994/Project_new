const express = require("express"); // Import express
const fileUpload = require("express-fileupload");

// Import routes
const product_brand = require("./routes/product_brand")
const report_product = require("./routes/report_product");
const store_area = require("./routes/store_area");
const store = require("./routes/store");
const port = process.env.PORT || 3000; // Define port


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable req.body (form-data)
app.use(fileUpload());

app.use(express.static("public"));

// Make routes
app.use("/productBrand", product_brand);
app.use("/reportProduct", report_product);
app.use("/storeArea", store_area);
app.use("/store", store);

app.all("*", (req, res, next) => {
    next({ statusCode: 404, message: "Endpoint not found" });
  });  

// app.use(errorHandler);
// Run the server
app.listen(port, () => console.log(`Server running on port ${port}`));