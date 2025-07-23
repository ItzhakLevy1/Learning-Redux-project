// Create a type
const BUY_CAKE = "BUY_CAKE";

// Create an action creator function (a function that returns an action)
function buyCake() {
  return {
    // Create an action (an object with a "type" property)
    type: BUY_CAKE,
    info: "First redux action"
  };
}
