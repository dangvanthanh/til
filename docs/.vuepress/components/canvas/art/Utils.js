export const rand = (min, max) => {
  return min + Math.random() * (max - min);
};

export const randHsl = () => {
  let h = rand(1, 360);
  let s = rand(0, 100);
  let l = rand(0, 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
};
