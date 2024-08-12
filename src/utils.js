export const getLocalizedDataFromDate = (datestring) => {
    const [year, month, day] = datestring.split('-');
    switch (month) {
        case "01":
            return [year, "Enero", day]
        case "02":
            return [year, "Feb.", day]
        case "03":
            return [year, "Marzo", day]
        case "04":
            return [year, "Abril", day]
        case "05":
            return [year, "Mayo", day]
        case "06":
            return [year, "Junio", day]
        case "07":
            return [year, "Julio", day]
        case "08":
            return [year, "Agosto", day]
        case "09":
            return [year, "Sept.", day]
        case "10":
            return [year, "Oct.", day]
        case "11":
            return [year, "Nov.", day]
        case "12":
            return [year, "Dic.", day]
    }
    return [year, month, day];
};

