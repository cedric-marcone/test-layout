import fs from "fs/promises";
import path from "path";

const urls = [
  "https://randompicturegenerator.com/img/cat-generator/g5d735248ebee4eacce077a3a5d0c832a7b306cb0edc1c28944edc9b44caea6e794b0b0ba00bbb22c55f24e819bb4ae12_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g8903c086bd0ab3c739ad1e148d007dc5d4566fecf775c6a476620d7f76c68eae57a43451b4fe361a8ef8515d0224ba8a_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g153d8808a70e3ac80924d50cc7f31b2c6fdf0cfd8ce681b5827805b9958c19d6a12f0e1a1bee957d1629357239959ee0_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g219984c2f07ccbd870686d05396dd5b7673c758583e0ad9abd8f8a57512abf2c4557324882121eca0a12e6a1959dbc15_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g8c05547620a4cada5c84f16d2d937b4943936cb13dc0a477c415ed5a25b5ff4bd89bebaa39e463cd9ea2c2a1dd74a201_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g1e03289ef0ac80c2ef02b575ffc264d5facd411c182d6af3743492b9bfda01c8c2ed2c3a566dc319289c5bb829c7489e_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g2e8da18aee0bd8533f06fe46380c8718b0d6ecc247cd1beac557398fdda887c8b3c1db248822716206c61ef822daddd1_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g7d522c74c1aa07e3a6551cdf7aa8d1275c1df70a78a97d2e4e1260d303c1f3c25091aadc93c0d3b5b2d8d1c565feac2d_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g1bf31daecc24952be630d15eb8741e7859d4d7eab9f756586d53bb24928f0e90fc42c175c48ac38e85a60b1838db245d_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g592fd2a3832b70794aaca8595cfafc335ddd8738e3d01261e608f6f4ee8b0d24a1984c8bc6377ecd5b3463e6329c139d_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g943321d6f732958642066e19d2fe383fe74ee3bd1bafcfa83b19b2d3c46af1da6a2418c81f7456ce2eb60e38b93a2b35_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gbc0167b5494b0f694cef1a200e0c580556048963590ce82c252451d73dfcdd9ed9ff28282a16b8f901f409deaa7a54e8_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g0f7efb8e631a6ead35f068418a568b22d6c9c70ea8add57671ce7b7a23083eacb8e91dd2f4d0fefccf5900410bd8b9f0_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g0f94542dc316be8269f644259b2c33352d35679ae6abdefb768f6dc1e5ca62034d4dab3a649ebf74bd6997fd4fa16fa4_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g94e8f5b127f379ba563d00338aba27460ee89b602567fb12d27ab4a7ef4f6b48c5513ba23a6bc7dde7d0b5a5d29ab393_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g092093bef7d7a9b913a0a8f62f90c8b728d022f67a0b852a2652870db07a03798424082570652864e8f91d0ff26167f3_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g253005065a1bad808ed7483af7d33958777fc7e5d780f4396d39febf3639f814a3a559977801be16de883a8c0f44f83b_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gb889f951fc97c8ec5e4f57457b186da6fef4a473199b5a47ebbb153ba27d587c22e92ec83f5d8823bac93e8a7542df6e_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gf626e6cbf14c8971b9bb600dc811f4880e7f0c928f922b6a8a480d6c79e1faee861162e91645a31ea6ea170bde81a685_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g4af991395d618c0d639d43ec7bf0ced1528657f711cbff9f96a571d0ab7ba136ec1aa2165d9209140866fafccc150a24_640.png",
  "https://randompicturegenerator.com/img/cat-generator/g3dcb41c1c193ac1c1f22617b27880a51975c899cd305c86b05d08ce4c26c16706fcd06f8b44d78ae87cd384d482756a9_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g6a3a869c28cc460099d9f8ed615283df4a138d6e40a2615e203a13f465f451639bd3936f4e3cb8439203fdf1b89a1898_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gccf6561742fafd5ffd8ea166e2d9e650270f6be9f5b930d98258873678f84c2f7830f728f29af4c743de4f318bade641_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g7a50f181bbdf29523261229f1494b71f0f5ecf791f1fba26437e8f1ab016f8297c0cd2665a7761faac6522124a94c558_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g00baf44e3846b6d63df3c56b500e5ff71dc47b23fd087411b995998d8312b1d14f89c23890156f2f7f1e8d465f6e6021_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gef51cb031487efdd3075011ff519786ab4da1f19dd28a293fe488dfc4ff111171e6eb2ad60ab9ba9556dcd097e82ee79_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gdabf3eef0302e9ca1dab90a84b38a24f8eb29b7ea68d93c527f2af5de37ae8689815925f8df8225096338e3e36ef69f2_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g29d311fe73384a37d522c4a9f961a3b0d683cb233cf837cc42e97a7bda6888625880a391ff4deb10f9c7a75f5dd75128_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g99d4b5e4a82c40eac966db95b6267d4263faf5662131fdf2e64c3a7ae7302c09b3de2f7309db176fc6f0066d59ad9b9a_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g0d2808031377ed21c5fa2ff78c52c8d789a2d87e964c8a4aa3edc9c3ba0ca51ea12d595149313fbf31af99e29744a0f9_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gba8eedace7805c4d27774bf98ffe5c82021fc0925bbeec1a45f8dfe89dce20ec256f32bb7b4b48f4bd6a393061f66636_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gf2043da621791e199091d059c3a9b3ed33484dbbeed62351c0677d2c103b1ddf57fbe4ee802bcc99b67f7955796b2081_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g01782305a4fa8328276cb0d34a80ce95fdb7b950e09cd8cf2f9beee3bd83c752a1ca084b5f3a0cc70219dea10d39138e_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g3773e595a8ef5a3349ff896ac0b42959bd4c1f7136715552cabc8b9f1c2d42add537ace78a88b27b6fa6123c7f76eaa0_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gf36daa0d72cddbe355624c907104df53ed4e0e2cbd6fc98377edf870d9fccf994b798b6123f155d542b43dc04414d296_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g6e9e4ee06acba1e5b6c545ab2cdafea5e8af548779f30627ffa43e09ee8938f4c017a895f7cd6e77ddf9c86c42fa9390_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gffac7d89a6766193920012ecea55e5faf3d8494670322109af3ec828743b7462bd13326ea1d2f24cc64e871021abab1b_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g97b4acff5322f711ca04d0e5f9aad5b5d3f737d4683d35d098515ab70dad69956fbe3dd4a98d0f4e7c04f25386a1940f_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/gc00edab7adb15610f5e04f387ac5a2585612fba51d415550db303289bf14ee1724f88378f3382386b47cfdda58c229ba_640.jpg",
  "https://randompicturegenerator.com/img/cat-generator/g67e1cede95ccfc53fafba6031b9ba1b958d45e5889dbb7273be487b745392eda87606fd3ed27c7961e839dc99dd4a98e_640.jpg",
];

const TARGET = "public/images";

async function download(url) {
  const u = new URL(url);
  const p = u.pathname;
  const file = path.basename(p);
  const response = await fetch(url);
  return { file, body: response.body };
}

const stats = await fs.stat(TARGET);
if (!stats.isDirectory) {
  await fs.mkdir(TARGET);
}

for await (const [index, url] of urls.entries()) {
  const { file, body } = await download(url);
  const name = path.join(TARGET, `${index}.jpg`);

  await fs.writeFile(name, body);

  console.log(index, file, name);
}
