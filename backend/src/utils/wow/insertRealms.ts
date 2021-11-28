import {connect} from "../database.utils";
import {WowRealms} from "../interfaces/WowRealms";
import {ResultSetHeader, RowDataPacket} from 'mysql2'

// export const insertRealms = async (realms: WowRealms) => {
//     try {
//         const mySqlConnection = await connect()
//         const [rows] = await mySqlConnection?.execute('INSERT INTO wowRealms(realmId, realmName) VALUES (:realmId, :realmName)', {realms})
//         return "Realms created successfully"
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const insertRealms = async (realms: WowRealms) => {
//     try {
//         const mySqlConnection = await connect()
//         const mySqlQuery = 'INSERT INTO wowRealms(realmId, realmName) VALUES (:realmId, :realmName)'
//         const  [rows] = await mySqlConnection.execute(mySqlQuery, realms)
//         return "Realms created successfully"
//     } catch (error) {
//         console.log(error)
//     }
// }

export async function insertRealms(realms: WowRealms) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mysqlQuery = 'INSERT INTO wowRealms(realmId, realmName) VALUES (:realmId, :realmName)'
        await mySqlConnection.execute(mysqlQuery, realms)
        // await mySqlConnection.destroy()
        console.log("Realm Created")
        return "Realms created successfully"
    } catch (error) {
        console.error(error)
        throw error
    }
}
