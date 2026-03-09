const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convertImages() {
  // Using Defects_08032026 folder as specified
  const sourceDir = './requirements/Defects_08032026/Wings2.0_img/source';
  const outputDir = './assets/images';
  
  // Mapping: source -> output name (based on Desktop.jpg requirement)
  // AdobeStock_1850062993.jpg = 3D ribbons = Create workflow
  // AdobeStock_1681783079.jpg = colorful spheres = Create autonomous agent
  // AdobeStock_362547713.jpg = wavy mesh = Computer-using agent
  
  const mappings = [
    { src: 'AdobeStock_1850062993.jpg', out: 'card-workflow.png' },
    { src: 'AdobeStock_1681783079.jpg', out: 'card-autonomous.png' },
    { src: 'AdobeStock_362547713.jpg', out: 'card-computer.png' }
  ];
  
  for (const m of mappings) {
    const inputPath = path.join(sourceDir, m.src);
    const outputPath = path.join(outputDir, m.out);
    
    console.log(`Converting ${m.src} -> ${m.out}...`);
    
    await sharp(inputPath)
      .resize(500, 240, { fit: 'cover', position: 'center' })
      .png({ quality: 90 })
      .toFile(outputPath);
    
    console.log(`Done: ${outputPath}`);
  }
  
  console.log('All images converted!');
}

convertImages().catch(console.error);
