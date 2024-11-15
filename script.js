// Function to start the skin health assessment
function startAssessment() {
    // Open the skincare tool (this will trigger the API or tool to open)
    if (typeof YMK !== 'undefined' && YMK.openSkincare) {
      YMK.openSkincare();
    } else {
      console.error('YMK SDK is not loaded correctly.');
    }
  }
  
  // Function to close the skin health assessment
  function closeAssessment() {
    // Close the skincare tool
    if (typeof YMK !== 'undefined' && YMK.close) {
      YMK.close();
    } else {
      console.error('YMK SDK is not loaded correctly.');
    }
  }
  
  // Include the SDK script dynamically when the page loads
  (function(d, k) {
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://plugins-media.perfectcorp.com/v1.24/sdk.js?apiKey=' + k;
    var x = d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })(document, 'for-v1.9');
  