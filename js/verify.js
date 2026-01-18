document.getElementById("verifyBtn").addEventListener("click", async () => {
  const certId = document
    .getElementById("certId")
    .value.trim()
    .toUpperCase();

  const result = document.getElementById("result");

  // Basic validation
  if (!certId.startsWith("DEVS") || certId.length !== 12) {
    result.innerHTML =
      "<span style='color:red'>❌ Invalid Certificate Number</span>";
    return;
  }

  result.innerHTML = "⏳ Verifying certificate...";

  try {
    const response = await fetch("/certificates.json");
    const certificates = await response.json();

    const match = certificates.find(
      (c) => c.certificate_id === certId
    );

    if (match) {
      result.innerHTML = `
        <div style="color:green">
          ✅ <b>Certificate Verified</b><br><br>
          <b>Name:</b> ${match.name}<br>
          <b>College:</b> ${match.college}<br>
          <b>Email:</b> ${match.email}<br>
          <b>Certificate ID:</b> ${match.certificate_id}
        </div>
      `;
    } else {
      result.innerHTML =
        "<span style='color:red'>❌ Certificate Not Found</span>";
    }
  } catch (error) {
    result.innerHTML =
      "<span style='color:red'>⚠ Unable to verify right now</span>";
  }
});
