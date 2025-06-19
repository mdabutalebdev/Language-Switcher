function switchLanguage() {
  const lang = document.getElementById("language").value;

  switch (lang) {
    case "en":
      document.getElementById("home").innerText = "Home";
      document.getElementById("about").innerText = "About";
      document.getElementById("services").innerText = "Services";
      document.getElementById("projects").innerText = "Projects";
      document.getElementById("contact").innerText = "Contact";

      document.getElementById("banner-title").innerText = "Welcome to Our Website";
      document.getElementById("banner-subtitle").innerText = "We provide the best services for you.";

       
      break;

    case "bn":
      document.getElementById("home").innerText = "হোম";
      document.getElementById("about").innerText = "আমাদের সম্পর্কে";
      document.getElementById("services").innerText = "সেবা";
      document.getElementById("projects").innerText = "প্রকল্পসমূহ";
      document.getElementById("contact").innerText = "যোগাযোগ";

      document.getElementById("banner-title").innerText = "আমাদের ওয়েবসাইটে স্বাগতম";
      document.getElementById("banner-subtitle").innerText = "আমরা আপনার জন্য সেরা সেবা প্রদান করি।";

       
      break;

    default:
      console.log("Unsupported language");
  }
}
