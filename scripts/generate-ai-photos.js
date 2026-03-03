import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FAL_API_KEY = '74836a4a-e2d6-4d75-9c64-c300ddc7801b:a782c1b4c43a5b0d2110e727491a53c8';
const OUTPUT_DIR = path.join(__dirname, '../client/public/images/ai-generated');

// Photo categories and prompts
const photoCategories = {
  'before-after': [
    'Before and after photo of a clogged drain pipe, split screen showing dirty blocked pipe on left and clean flowing pipe on right, professional plumbing work, high quality, realistic',
    'Before and after bathroom renovation, old worn tiles on left, modern clean white bathroom on right, professional photography, 4k quality',
    'Before and after water heater installation, old rusty heater on left, new modern white heater on right, clean installation, professional photo',
    'Before and after electrical panel upgrade, old fuse box on left, modern circuit breaker panel on right, professional installation',
    'Before and after LED lighting installation, dim yellow lights on left, bright white LED lights on right, modern office space',
    'Before and after pipe leak repair, water damage and mold on left, clean repaired wall on right, professional restoration',
    'Before and after kitchen sink installation, old stained sink on left, new stainless steel sink on right, professional plumbing',
    'Before and after toilet replacement, old cracked toilet on left, new modern toilet on right, clean bathroom',
    'Before and after shower installation, old moldy shower on left, new glass shower enclosure on right, luxury bathroom',
    'Before and after water pipe replacement, corroded lead pipes on left, new PPR pipes on right, professional installation'
  ],
  'equipment': [
    'Professional Ridgid K-6200 drain cleaning machine, orange and black, on white background, product photography, 4k',
    'FLIR thermal imaging camera detecting water leak in wall, screen showing heat signature, professional equipment',
    'Fluke multimeter testing electrical circuit, digital display showing voltage, professional electrician tool',
    'Professional pipe wrench set, various sizes, chrome finish, organized on tool board, product photography',
    'Borescope inspection camera showing inside of pipe, LCD screen display, professional plumbing diagnostic tool',
    'Pressure testing pump for plumbing systems, red and silver, professional equipment on white background',
    'Professional electrician tool bag with organized tools, Klein Tools brand, high quality leather',
    'Pipe threading machine for plumbing, professional grade, metalworking equipment',
    'Professional drain snake cable, 50 feet long, coiled neatly, industrial quality',
    'Digital manometer for pressure testing, professional HVAC tool, LCD display'
  ],
  'technician': [
    'Professional Portuguese plumber in blue uniform working under sink, focused expression, natural lighting, photorealistic',
    'Electrician installing circuit breaker in electrical panel, wearing safety gear, professional work environment',
    'Plumber using thermal camera to detect leak in wall, professional diagnostic work, modern equipment',
    'Technician repairing water heater, tools organized nearby, clean work area, professional photography',
    'Electrician installing LED lights in ceiling, on ladder, safety equipment, professional installation',
    'Plumber fixing toilet, professional uniform, clean bathroom, natural lighting, 4k quality',
    'Technician inspecting pipe with borescope camera, concentrated expression, professional diagnostic',
    'Electrician testing electrical outlet with multimeter, safety glasses, professional work',
    'Plumber soldering copper pipes, protective gloves, focused work, professional craftsmanship',
    'Technician explaining repair to customer, friendly interaction, professional service'
  ],
  'projects': [
    'Completed modern bathroom renovation, white tiles, glass shower, LED lighting, luxury finish, professional photography',
    'New electrical panel installation, organized wiring, labeled circuits, professional craftsmanship, clean work',
    'Completed kitchen plumbing installation, new sink and faucet, clean pipes, professional finish',
    'LED lighting installation in modern office, bright even lighting, energy efficient, professional result',
    'New water heater installation, clean pipes, proper venting, professional plumbing work',
    'Renovated bathroom with new fixtures, modern design, clean installation, professional finish',
    'Completed electrical rewiring project, organized cables, modern switches, professional installation',
    'New shower installation with glass enclosure, modern fixtures, clean tilework, luxury bathroom',
    'Central heating system installation, radiators and pipes, professional HVAC work',
    'Completed pipe replacement project, new PPR pipes, clean installation, professional plumbing'
  ],
  'emergency': [
    'Burst pipe spraying water in basement, emergency situation, dramatic lighting, urgent repair needed',
    'Flooded bathroom floor with water everywhere, emergency plumbing situation, realistic photo',
    'Electrical short circuit with sparks, dangerous situation, emergency electrician needed, dramatic',
    'Overflowing toilet with water on floor, emergency plumbing, urgent situation, realistic',
    'Water leak from ceiling creating puddle, emergency repair needed, water damage visible',
    'Frozen burst pipe in winter, ice and water damage, emergency plumbing situation',
    'Electrical panel smoking, fire hazard, emergency electrician needed, dangerous situation',
    'Sewage backup in basement, emergency plumbing situation, urgent cleanup needed',
    'Water heater leaking heavily, emergency repair needed, water pooling on floor',
    'Major pipe leak behind wall, water damage visible, emergency plumbing repair'
  ],
  'testimonials': [
    'Happy Portuguese homeowner shaking hands with plumber, satisfied customer, natural lighting, professional photo',
    'Elderly couple smiling with electrician in their home, successful repair, warm atmosphere',
    'Young family thanking plumber after bathroom renovation, happy customers, modern home',
    'Business owner satisfied with electrical installation, professional handshake, office setting',
    'Homeowner showing thumbs up after leak repair, satisfied customer, clean bathroom background',
    'Customer reviewing completed work with technician, tablet showing before/after photos, satisfied expression',
    'Happy homeowner in renovated bathroom, arms crossed, proud smile, modern fixtures',
    'Restaurant owner satisfied with emergency plumbing repair, professional interaction, commercial kitchen',
    'Elderly woman grateful after heating repair, warm home, winter setting, happy customer',
    'Young professional satisfied with LED installation, modern office, energy savings visible'
  ]
};

async function generateImage(prompt, category, index) {
  console.log(`Generating ${category} image ${index + 1}...`);

  try {
    const response = await fetch('https://fal.run/fal-ai/flux/schnell', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt + ', professional photography, high quality, 4k, realistic, detailed',
        image_size: 'landscape_16_9',
        num_inference_steps: 4,
        num_images: 1,
        enable_safety_checker: true
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.images && result.images.length > 0) {
      const imageUrl = result.images[0].url;

      // Download image
      const imageResponse = await fetch(imageUrl);
      const buffer = await imageResponse.buffer();

      // Save image
      const filename = `${category}-${String(index + 1).padStart(3, '0')}.jpg`;
      const filepath = path.join(OUTPUT_DIR, category, filename);
      fs.writeFileSync(filepath, buffer);

      console.log(`✓ Saved: ${filename}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`✗ Error generating ${category} image ${index + 1}:`, error.message);
    return false;
  }
}

async function generateAllPhotos() {
  console.log('🎨 Starting AI photo generation with FAL.AI...\n');

  let totalGenerated = 0;
  let totalFailed = 0;

  for (const [category, prompts] of Object.entries(photoCategories)) {
    console.log(`\n📁 Category: ${category} (${prompts.length} images)`);

    for (let i = 0; i < prompts.length; i++) {
      const success = await generateImage(prompts[i], category, i);

      if (success) {
        totalGenerated++;
      } else {
        totalFailed++;
      }

      // Rate limiting: wait 2 seconds between requests
      if (i < prompts.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✓ Total generated: ${totalGenerated}`);
  console.log(`✗ Total failed: ${totalFailed}`);
  console.log('='.repeat(50));
}

// Run generation
generateAllPhotos().catch(console.error);
