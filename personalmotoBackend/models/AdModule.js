import mongoose from "mongoose";

const AdSchema = new mongoose.Schema({
  userid: mongoose.Schema.Types.ObjectId,
  productType: String,
  damaged: String,
  imported: String,
  vin: String,
  mileage: String,
  registration: String,
  registrationDate: String,
  showRegistrationCheck: String,
  productionYear: String,
  vehicleBrand: String,
  vehicleModel: String,
  fuelType: String,
  power: String,
  capacity: String,
  doors: String,
  gearBox: String,
  version: String,
  bodyType: String,
  color: String,
  ytVideo: String,
  title: String,
  description: String,
  netPrice: String,
  price: String,
  currency: String,
  sellerName: String,
  postalCode: String,
  telephone: String,
  freeVerificationCheck: String,
  images: Array,
});

const AdModel = new mongoose.model("Ad", AdSchema);

export default AdModel;
