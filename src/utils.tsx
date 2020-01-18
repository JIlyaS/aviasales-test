const transformDirationTime = (duration: any): String => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}ч ${minutes}м`;
};

export {transformDirationTime};