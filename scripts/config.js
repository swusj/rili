const MONTH_OF_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTH_OF_COM_YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAY_CHENGE = [6, 0, 1, 2, 3, 4, 5];
const WEEK = ["一", "二", "三", "四", "五", "六", "日"]
const SHOW_LIST = ["day", "month", "year"]
const NUMOF_CANLENDER_ITEM = 42  // 日历表格的总td数
const NUMOF_CANLENDER_ROW_ITEM = 7 // 日历表格的一行的td数
const NUMOF_MONTH_YEAR_ITEM = 16  // 月历、年历表格的总td数
const NUMOF_MONTH_YEAR_ROW_ITEM = 4 // 月历、年历表格的一行的td数
const MONTH_NUM_OF_YEAR = 12 //一年有几个月
const NUM_OF_NEAR_YEARS = 10 // 年历附近几年要显示变白
const NUMOF_TABLE = 3 // 实际生成的table数
const TRANS_TIME = 0.15 // 动画持续时间

export {
    MONTH_OF_LEAP_YEAR,
    MONTH_OF_COM_YEAR,
    DAY_CHENGE,
    WEEK,
    SHOW_LIST,
    NUMOF_CANLENDER_ITEM,
    NUMOF_CANLENDER_ROW_ITEM,
    NUMOF_MONTH_YEAR_ROW_ITEM,
    NUMOF_MONTH_YEAR_ITEM,
    MONTH_NUM_OF_YEAR,
    NUM_OF_NEAR_YEARS,
    NUMOF_TABLE,
    TRANS_TIME,
}