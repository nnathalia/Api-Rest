import { Request, Response } from 'express';

export class UserController {

    public list(req: Request, res: Response) {
        res.status(200).json({
            lista: ["Nathalia", "nmariano@gmail.com", "nath"],
        });
    }

    public create(req: Request, res: Response) {
        res.status(201).json({
            messsage: 'create'
        });

    }

    public update(req: Request, res: Response) {
        res.status(200).json({
            messsage: 'update'
        });
    }

    public destroy(req: Request, res: Response) {
        res.status(200).json({
            messsage: 'delete'
        });
    }
}