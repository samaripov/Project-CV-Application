// Check the array of properties to ensure valid input is given.
//@param properties : Array of items to check
//@returns true if something is missing, false if everything is in order
export default function isThereAMissingField(properties) {
  for(const [key, value] of Object.entries(properties)) {
    if(value === undefined || value === "") {
      return key;
    }
  }
  return false;
}