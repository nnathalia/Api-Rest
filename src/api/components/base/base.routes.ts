import { Router } from 'express';
import { BaseController } from './base.controller';

export class BaseRoutes {
    private router: Router = Router();

    private readonly controller: BaseController;

    constructor () {
        this.controller = new BaseController();
        this.init();
    }

    public init(): void{
        this.router.get('/', this.controller.index);
        this.router.get('/info', this.controller.info);
        this.router.get('/dev', this.controller.infoDev);
    }

    public routes(): Router {
        return this.router;
    }
}