const monthNumberToString = {
  1: "Enero",
  2: "Feb.",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Sep.",
  10: "Oct.",
  11: "Nov.",
  12: "Dic.",
};

export const getLocalizedDataFromDate = (datestring) => {
  const [year, month, day] = datestring.split("-");

  const monthNumber = parseInt(month);

  let monthString = monthNumberToString[monthNumber];

  if (!monthString) {
    monthString = monthNumber;
  }

  return [year, monthString, day];
};
