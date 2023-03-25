import dayjs from "dayjs";
import { numberToArray } from "utils";

export const startOfDay = (date: dayjs.ConfigType) => dayjs(date).startOf("month").day(); // Sunday: 0 Saturday: 6
export const endOfDay = (date: dayjs.ConfigType) => dayjs(date).endOf("month").day(); // Sunday: 0 Saturday: 6

export const currMonthArray = (date: dayjs.ConfigType) => numberToArray(dayjs(date).daysInMonth());
export const lastMonthArray = (date: dayjs.ConfigType) => numberToArray(dayjs(date).subtract(1, "M").daysInMonth());
export const nextMonthArray = (date: dayjs.ConfigType) => numberToArray(6 - endOfDay(date));

export const YMDFormat = (date: dayjs.ConfigType) => dayjs(date).format("YYYY년 MM월 DD일");
export const YMFormat = (date: dayjs.ConfigType) => dayjs(date).format("YYYY년 MM월");
