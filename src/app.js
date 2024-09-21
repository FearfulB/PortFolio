import * as THREE from 'three';

// Créer une scène
const scene = new THREE.Scene();

// Créer une caméra


// Créer un rendu WebGL
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Charger l'image de texture
const loader = new THREE.TextureLoader();
loader.load('assets/skiResort.jpg', function (texture) {
    console.log("Texture chargée avec succès");

    // Créer un plan pour l'île
    const geometry = new THREE.PlaneGeometry(10, 10, 32, 32); // Plan avec plus de segments
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const island = new THREE.Mesh(geometry, material);

    // Déformer les sommets pour donner un aspect d'île
    const vertices = island.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] = Math.sin(vertices[i] * 2) * 0.5; // Ajustez la formule pour la hauteur
    }
    island.geometry.attributes.position.needsUpdate = true; // Indiquez que les sommets ont été modifiés

    // Rotation et ajout à la scène
    island.rotation.x = -Math.PI / 2; // Positionnez l'île horizontalement
    scene.add(island);

    // Fonction de rendu
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}, undefined, function (error) {
    console.error("Erreur lors du chargement de la texture :", error);
});
