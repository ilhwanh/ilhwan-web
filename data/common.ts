import * as moment from 'moment'

export const name = "Ilhwan Hwang"
export const position = "Data Engineer"
export const catchPhrase = ["프론트에서 인프라까지.", "욕심 많은 데이터 엔지니어."]

export const formatDate = (d: Date) => {
    return moment.default(d).format("MMM YYYY")
}

export const formatPeriod = (d1: Date, d2?: Date) => {
    return formatDate(d1) + " ~ " + (d2 !== undefined ? formatDate(d2!) : "")
}

export const isExport = process.argv.findIndex(arg => arg === "export") >= 0