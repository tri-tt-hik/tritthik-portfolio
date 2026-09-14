const fs = require('fs');
const path = require('path');

const extractAndWrite = (mdFilePath, outName) => {
  const content = fs.readFileSync(mdFilePath, 'utf8');
  // the json is everything after the `---` separator
  const jsonStr = content.split('---')[1].trim();
  const json = JSON.parse(jsonStr);
  
  let componentContent = json.files[0].content;
  
  // replace @/lib/utils with ../../../lib/utils
  componentContent = componentContent.replace(/@\/lib\/utils/g, '../../../lib/utils');
  
  const outPath = path.join(__dirname, 'src/assets/components/magicui', outName);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, componentContent);
  console.log('Wrote', outName);
};

const basePath = 'C:\\Users\\TRITTHIK\\.gemini\\antigravity-ide\\brain\\95419946-d08b-4161-a830-74cbd4284bc2\\.system_generated';

extractAndWrite(path.join(basePath, 'steps\\112\\content.md'), 'Particles.tsx');
extractAndWrite(path.join(basePath, 'steps\\113\\content.md'), 'TypingAnimation.tsx');
extractAndWrite(path.join(basePath, 'steps\\114\\content.md'), 'MagicCard.tsx');

