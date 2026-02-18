document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const appointmentData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        department: document.getElementById("department").value,
        date: document.getElementById("date").value
    };

    console.log("Sending Appointment:", appointmentData);

    fetch("http://clinic-alb-1606828551.ap-south-1.elb.amazonaws.com/api/appointments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(appointmentData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("appointmentForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to submit appointment");
    });
});
