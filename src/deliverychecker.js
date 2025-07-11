export function checkDeliveryPath(deliveries, path) {
    if (!Array.isArray(deliveries) || !Array.isArray(path)) {
        return {
            status: "error",
            error_code: "invalid_input",
            error_message: "Deliveries and path must be arrays.",
        };
    }

    for (const d of deliveries) {
        if (!Array.isArray(d) || d.length !== 2) {
            return {
                status: "error",
                error_code: "invalid_input",
                error_message:
                    "Each delivery must be a pair [pickupAddress, dropoffAddress].",
            };
        }
    }

    const pickups = new Set();
    const dropoffs = new Map();

    deliveries.forEach(([pickup, dropoff]) => {
        pickups.add(pickup);
        dropoffs.set(dropoff, pickup);
    });

    const pickedUp = new Set();

    const steps = [];

    for (const address of path) {
        let action = null;

        if (pickups.has(address)) {
            action = "pickup";
            pickedUp.add(address);
        } else if (dropoffs.has(address)) {
            const requiredPickup = dropoffs.get(address);
            if (!pickedUp.has(requiredPickup)) {
                return {
                    status: "error",
                    error_code: "delivery_dropoff_before_pickup",
                    error_message: `Dropoff address ${address} visited before its pickup ${requiredPickup}.`,
                };
            }
            action = "dropoff";
        }

        steps.push({ address, action });
    }

    for (const [pickup, dropoff] of deliveries) {
        if (!path.includes(pickup) || !path.includes(dropoff)) {
            return {
                status: "error",
                error_code: "delivery_address_not_in_path",
                error_message: `Path does not include delivery from pickup ${pickup} to dropoff ${dropoff}.`,
            };
        }
    }

    return {
        status: "success",
        steps,
    };
}
