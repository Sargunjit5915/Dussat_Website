
// Central product dataset — edit in one place and it auto-updates compare page.
// All fields are strings to keep it simple; add more as needed.
window.DUSSAT_PRODUCTS = [
  {
    slug: "trata",
    name: "Trata",
    // tagline: "Delivery & Search-and-Rescue UAV",
    hero: "/assets/img/placeholder.svg",
    price: "On request",
    summary: "High-endurance multirotor with modular payloads for logistics and SAR.",
    specs: {
      "Role": "Delivery / SAR",
      "Max Flight Time": "45 min (payload dependent)",
      "Max Payload": "5 kg",
      "Range (LoS)": "10 km",
      "Wind Resistance": "12 m/s",
      "Ingress Protection": "IP54",
      "GNSS": "GPS/GLONASS/Galileo + RTK (optional)",
      "Video Link": "1080p60 low-latency",
      "Operating Temp": "-10°C to 45°C",
      "Redundancy": "Dual IMU, dual compasses",
      "Notes": "Swap payloads in <60s"
    }
  },
  {
    slug: "patang",
    name: "Patang",
    // tagline: "Persistent Tethered Drone",
    hero: "/assets/img/placeholder.svg",
    price: "On request",
    summary: "Unlimited endurance via smart tether for events and perimeter security.",
    specs: {
      "Role": "Persistent Aerial (Tethered)",
      "Endurance": "Continuous (tether-powered)",
      "Tether Length": "120 m (customizable)",
      "Power Module": "3.5 kW peak, 48V",
      "Hover Capability": "Beaufort 6 winds",
      "Payload": "EO/IR gimbal, spotlight",
      "Safety": "Automated reel-in on fault",
      "Setup Time": "< 8 min",
      "Ingress Protection": "IP54",
      "Notes": "Portable ground power station"
    }
  },
  {
    slug: "droneastra",
    name: "DroneAstra",
    // tagline: "Counter-UAS Intercept Platform",
    hero: "/assets/img/placeholder.svg",
    price: "On request",
    summary: "Detect, track, and neutralize rogue drones with layered effects.",
    specs: {
      "Role": "Counter-UAS",
      "Detection": "RF + EO tracking",
      "Mitigation": "Net capture / kinetic (policy-bound)",
      "Speed": "20 m/s",
      "Endurance": "30 min",
      "Range": "Up to 5 km intercept",
      "Comms": "Encrypted link",
      "Safety": "Geofencing + crowd-safety modes",
      "Notes": "Integrates with fixed C-UAS sensors"
    }
  },
  {
    slug: "remote",
    name: "Pro Remote",
    // tagline: "Long-Range Controller",
    hero: "/assets/img/placeholder.svg",
    price: "On request",
    summary: "Low-latency controller with sunlight-readable display and swappable batteries.",
    specs: {
      "Role": "GCS (Ground Control Station)",
      "Latency": "< 120 ms",
      "Video": "1080p integrated monitor",
      "Bands": "2.4 / 5.8 GHz (region-locked)",
      "Battery": "Hot-swappable, 4+ hrs",
      "Ports": "HDMI out, USB-C",
      "GNSS": "High-precision positioning",
      "Ingress Protection": "IP52",
      "Notes": "Compatible with all Dussat airframes"
    }
  }
];
