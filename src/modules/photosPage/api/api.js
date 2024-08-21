import { server } from "../../../api/api";


/**
 * Формирует URL получения фоторафий
 * @param {*} dateStart начальная дата выборки
 * @param {*} dateEnd конечная дата выборки
 * @param {*} offset кол-во отступаемых сообщений
 * @param {*} count кол-во получаемых сообщений
 * @param {*} search фильтр поиска
 * @param {*} orderField колонка по которой упорядочивается
 * @param {*} orderType тип упорядочевания
 * @returns Сформированый URL получения фотографий
 */
export const GetPhotoUrl = (dateStart, dateEnd, offset, count, search, orderField, orderType, categories) => {
    return `${server}/api/photos?dateStart=${dateStart}&&dateEnd=${dateEnd}&&offset=${offset}&&count=${count}&&search=${search}&&orderField=${orderField}&&orderType=${orderType}&&categories=${categories}`;
}