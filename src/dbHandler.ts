import mysql from 'mysql2/promise';


export class dbHandler {
  //@ts-ignore
  private connection:mysql.Connection = mysql.createConnection({
    host: 'localhost',
    user: 'python',
    password: 'vmmFWLgAelf7',
    database: 'humiture'
  });


  async currentData(options?:currentDataOptions):Promise<Array<resultItem> | Array<resultHum> | Array<resultTemp>> {
    if (!options) {
      const db_response:any = (await this.connection).query(`SELECT time, temperature, humidity FROM data ORDER BY time DESC LIMIT 1`)
      const rows:Array<resultItem> = (await db_response)[0];
      return rows;
    }
    const db_response:any = (await this.connection).query(`SELECT time, ${options.temperature ? 'temperature' : ''}${options.temperature&&options.humidity ? ',' : ''} ${options.humidity ? 'humidity' : ''} FROM data ORDER BY time DESC LIMIT ${options.amountItems ? options.amountItems : '1'}`)
    const rows:Array<resultItem> = (await db_response)[0];
    return rows;
  }
}


type currentDataOptions = {
  temperature?: boolean,
  humidity?: boolean,
  amountItems?: number
}

type resultItem = {
  id:number,
  time:string,
  temperature:number,
  humidity:number
}
type resultTemp = {
  time:string,
  temperature:number,
}
type resultHum = {
  time:string,
  humidity:number
}