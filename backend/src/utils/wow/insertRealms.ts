import {connect} from "../database.utils";
import {WowRealms} from "../interfaces/WowRealms";

export const insertRealms = async (realms: WowRealms) => {
    try {
        const mySqlConnection = await connect()
        const [rows] = await mySqlConnection?.execute('INSERT INTO wowRealms(realmId, realmName) VALUES (:realmId, :realmName)', {realms})
        return "Realms created successfully"
    } catch (error) {
        console.log(error)
    }
}
