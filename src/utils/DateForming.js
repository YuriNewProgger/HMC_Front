Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

/**
 * Приводит дату к виду 2023-08-15T15:44:43, добавляя или убавляя часы
 * @param {*} date Дата
 * @param {*} offset Часы (добавить/убавить)
 * @returns ФОрматирования дата
 */
export const DateFormating = (date, offset) => `${new Date(date).addHours(offset).toISOString()}`.split('.')[0];

export const DTFormat = (dateTime) => {
    let splittingDateTime = new Date(dateTime).toLocaleString().split(',');
    let splittingDate = splittingDateTime[0].split('.');
    return `${splittingDate[2]}-${splittingDate[1]}-${splittingDate[0]}T${splittingDateTime[1].trim()}`;
}