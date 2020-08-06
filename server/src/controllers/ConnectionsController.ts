import { Request, Response } from "express"

import db from "./../database/connection"
import convertHourToMinutes from "./../utils/convertHourToMinutes";


class ConnectionsController {
  public async index(request: Request, response: Response) {
    const totalConnections = await db("connections").count("* as total");
    
    const {total} = totalConnections[0];

    return response.status(200).json({
      total
    })
  }

  public async create(request: Request, response: Response) {
    const {user_id} = request.body

    await db("connections").insert({
      user_id
    })

    response.status(201).send()
  }
}

export default new ConnectionsController()