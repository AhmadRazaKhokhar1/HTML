const ORDER_STATUSES = ["IN_TRANSIT", "PENDING", "PICKED_UP", "DELIVERED", "CANCELLED"];

const inTransit = "in-transit";
const pending = "pending";
const pickedUp = "picked-up";
const delivered = "delivered";
const cancelled = "cancelled";


const containerDivElement = document.createElement("div"); // <div></div>

// <div class="in-transit">...</div>



const handleOnChangeOfOrderStatus = (e) => {
    const ORDER_STATUS = e.target.value;

    switch (ORDER_STATUS) {
        case "IN_TRANSIT":
            containerDivElement.textContent = "The order is in transit"; // <div>The order is in transit</div>
            containerDivElement.className = inTransit; // <div class="in-transit">The order is in transit</div>
            break;
        case "PENDING":
            containerDivElement.textContent = "The order is still pending";
            containerDivElement.className = pending;
            break;
        case "PICKED_UP":
            containerDivElement.textContent = "The order is picked up by the rider";
            containerDivElement.className = pickedUp;
            break;
        case "DELIVERED":
            containerDivElement.textContent = "The order is delivered by the rider";
            containerDivElement.className = delivered;
            break;
        case "CANCELLED":
            containerDivElement.textContent = "The order is cancelled";
            containerDivElement.className = cancelled;
            break;
        default:
            containerDivElement.textContent = "The order status is invalid";
            break;
    }
    containerDivElement.classList.add("order-container"); // <div class="in-transit order-container">...</div>
}
const body = document.getElementById("body");

const selectOrderStatusElement = document.getElementById("select-order-status");
selectOrderStatusElement.addEventListener("change", (e) => handleOnChangeOfOrderStatus(e))
body.append(containerDivElement);