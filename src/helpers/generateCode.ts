export const generateCode = (numberOfPegs: number, numberOfColors: number) => {
  const code = [...Array(numberOfPegs)].map(() =>
    Math.floor(Math.random() * numberOfColors)
  );
  return code;
};