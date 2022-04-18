import express, { Application, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
require('dotenv').config()

// Routes
import articulosRouter from './Routers/articulos.routes';
import marcasRouter from './Routers/marcas.routes'

export class App{
  private app: Application;

  constructor(private port? : number | string){
      this.app = express();
      this.Settings();
      this.Middleswares();
      this.Routers();
  }

  //
  Settings(){
      this.app.set('port',this.port /* || process.env.DB_PORT */ || 3333 );
  }

  Middleswares(){
      this.app.use(morgan('dev'));
      this.app.use(urlencoded({extended:false}));
      this.app.use(express.json(), express.text());
      
      this.app.use(cors({
        origin: '*' ,
        methods: ['GET']
      }));
  }

  Routers(){
      this.app.use(articulosRouter);
      this.app.use(marcasRouter);

  }

  async listen(){
    this.app.listen(this.app.get('port'));
    console.log('Server Up, port',this.app.get('port'));
  };
}