// Fonction pour calculer la distance haversine entre deux points
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371; // Rayon de la Terre en kilomètres
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance en kilomètres
  return distance;
}

// Fonction pour convertir degrés en radians
function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

// Vérification si les coordonnées sont dans le rayon de 20 km
export function checkCoordinatesWithinRadius(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  radius: number
) {
  const distance = calculateDistance(lat1, lon1, lat2, lon2);
  return distance <= radius;
}

const example = () => {
  // Exemple d'utilisation
  const lat1 = 48.8566; // Latitude du point de référence
  const lng1 = 2.3522; // Longitude du point de référence

  const lat2 = 48.8534; // Latitude des coordonnées à vérifier
  const lng2 = 2.3488; // Longitude des coordonnées à vérifier

  const radius = 20; // Rayon en kilomètres

  const withinRadius = checkCoordinatesWithinRadius(
    lat1,
    lng1,
    lat2,
    lng2,
    radius
  );

  console.log(withinRadius); // Renvoie true si les coordonnées sont dans le rayon, sinon false
};
