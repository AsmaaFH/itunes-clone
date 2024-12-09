
interface Transport {
  deliver(): string;
}

class Truck implements Transport {
  deliver(): string {
    return "Delivering by land using a truck.";
  }
}

class Ship implements Transport {
  deliver(): string {
    return "Delivering by sea using a ship.";
  }
}

// Creator Class (Factory)
class Logistics {
  createTransport(type: string): Transport {
    if (type === "road") {
      return new Truck();
    } else if (type === "sea") {
      return new Ship();
    }
    throw new Error("Unknown transport type");
  }
}

// Client Code
const logistics = new Logistics();
const transport = logistics.createTransport("road");
console.log(transport.deliver());

// before factory pattern
const truck = new Truck();
const ship = new Ship();

class Airplane implements Transport {
  deliver(): string {
    return "Delivering by land using a truck.";
  }
}

let transportationType;

if (transportationType === 'truck') {
  const transport = new Truck();
} else if (transportationType === 'ship') {
  const transport = new Ship();
} else if (transportationType === 'airplane') {
  const transport = new Airplane();
}

