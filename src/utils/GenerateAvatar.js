const generateDiceBearAvataaars = seed => `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}`;
const generateDiceBearBottts = seed => `https://api.dicebear.com/9.x/bottts/svg?seed=${seed}`;
const generateDiceAdventurer = seed => `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`;
const generateDiceLorelei = seed => `https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}`;
const generateDiceBigSmile = seed => `https://api.dicebear.com/9.x/big-smile/svg?seed=${seed}`;
const generateDiceFunEmoji = seed => `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${seed}`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 1; i++) {
    const res = generateDiceBearAvataaars(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 1; i++) {
    const res = generateDiceBearBottts(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 1; i++) {
    const res = generateDiceAdventurer(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 1; i++) {
    const res = generateDiceLorelei(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 1; i++) {
    const res = generateDiceFunEmoji(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 1; i++) {
    const res = generateDiceBigSmile(Math.random());
    data.push(res);
  }
  return data;
};
