const { asin } = Math;
const { cos } = Math;
const { sin } = Math;
const { sqrt } = Math;
const { PI } = Math;

// equatorial mean radius of Earth (in meters)
const R = 6378137;

function squared(x: number) { return x * x; }
function toRad(x: number) { return (x * PI) / 180.0; }
function hav(x: number) {
  return squared(sin(x / 2));
}

// hav(theta) = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLon - aLon)
function calculateHaversineDistance(
  latitude1: number,
  longitude1: number,
  latitude2: number,
  longitude2: number,
): number {
  const aLat = toRad(latitude1);
  const bLat = toRad(latitude2);
  const aLng = toRad(longitude1);
  const bLng = toRad(longitude2);

  const ht = hav(bLat - aLat) + cos(aLat) * cos(bLat) * hav(bLng - aLng);
  return (2 * R * asin(sqrt(ht))) / 1000;
}

export default calculateHaversineDistance;
